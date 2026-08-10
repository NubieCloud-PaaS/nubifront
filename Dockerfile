# ── Stage 1: Install dependencies ──
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
# --ignore-scripts : le postinstall (fumadocs-mdx) choisit son adaptateur selon la
# présence d'un next.config.* ; les sources ne sont pas encore copiées ici, il
# basculerait donc sur l'adaptateur Vite (absent des dépendances) et échouerait.
# La génération est faite au stage suivant, où les sources sont présentes.
RUN npm ci --include=dev --ignore-scripts

# ── Stage 2: Build ──
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Génère .source/ (gitignoré) à partir de source.config.ts, puis builde.
RUN npx fumadocs-mdx && npm run build

# ── Stage 3: Run ──
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000

CMD ["node", "server.js"]
