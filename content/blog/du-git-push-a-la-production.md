---
title: "Du git push a la production en 5 minutes"
date: "2026-02-15"
author: "Equipe Nubiecloud"
tags: ["CI/CD", "Deploiement", "Git", "Automatisation"]
description: "Comment Nubiecloud transforme chaque git push en un deploiement automatique, avec build, tests et mise en production en quelques minutes."
image: "https://picsum.photos/seed/gitpush-prod/600/400"
---

Il y a encore quelques annees, deployer une application en production etait un evenement. On planifiait des fenetres de maintenance, on preparait des runbooks, on priait pour que tout se passe bien.

Aujourd'hui, les meilleures equipes deploient des dizaines de fois par jour. Leur secret ? Un pipeline CI/CD automatise qui transforme chaque commit en deploiement. Et avec Nubiecloud, vous pouvez faire pareil **sans configurer un seul pipeline**.

## Le workflow moderne : git push et c'est tout

Voici ce qui se passe quand vous poussez du code sur votre branche principale avec Nubiecloud :

```bash
$ git add .
$ git commit -m "feat: ajout du panier d'achat"
$ git push origin main
```

A partir de la, tout est automatique :

### 1. Detection et analyse (10 secondes)

Nubiecloud recoit le webhook de votre depot Git et analyse votre code :

```bash
$ nubi analyze
  → Framework detecte : Next.js 15
  → Runtime : Node.js 20.x
  → Package manager : npm
  → Build command : npm run build
  → Start command : npm start
  ✓ Configuration auto-detected
```

La detection est intelligente : elle lit votre `package.json`, `requirements.txt`, `go.mod`, `pom.xml` ou `composer.json` pour identifier la stack et la version.

### 2. Build securise (1-3 minutes)

Nubiecloud construit votre application dans un environnement isole et securise :

```bash
$ nubi build
  → Installing dependencies...
  → npm ci (234 packages)
  → Building application...
  → next build
  → ✓ Compiled successfully
  → Creating optimized production build...
  → Size: 187 MB (optimized)
  ✓ Build completed in 1m42s
```

Nubiecloud utilise des caches de build intelligents. Si seuls vos fichiers source ont change (pas les dependances), le build reutilise les couches mises en cache. Resultat : des builds subsequents 3 a 5 fois plus rapides.

### 3. Deploiement automatique (30-60 secondes)

Nubiecloud orchestre le deploiement de facon transparente :

```bash
  → Preparing production environment...
  → Deploying new version...
  → Rolling update: 0/2 → 1/2 → 2/2
  → Health check: OK
  ✓ Deployment successful
```

Le deploiement est **zero-downtime** : les nouvelles instances demarrent et passent les health checks avant que les anciennes soient arretees.

### 4. Post-deploiement (automatique)

```bash
  → SSL certificate: valid (auto-renewed)
  → CDN cache: purged
  → DNS: configured
  → Monitoring: active
  ✓ Live at https://mon-app.nubiecloud.io
```

**Temps total : moins de 5 minutes.** A chaque `git push`.

## Versionning et rollback

Nubiecloud garde un historique complet de chaque deploiement. Concretement, ca signifie :

**Tout est versionne.** Chaque deploiement est tracable. Vous avez un historique complet de toutes les versions deployees.

**Rollback instantane.** Un bug en production ? Revenez a n'importe quelle version precedente en quelques secondes. Pas besoin de rebuilder.

**Reproductibilite.** Si un incident survient, Nubiecloud restaure automatiquement vos ressources a l'identique.

**Audit trail.** Qui a deploye quoi, quand ? Tout est dans l'historique de votre console.

## Variables d'environnement et secrets

La gestion des variables est un point critique. Nubiecloud distingue deux types :

### Variables d'environnement

Pour les valeurs non sensibles : URL d'API, feature flags, configuration applicative.

```bash
# .env — Variables d'environnement
NODE_ENV=production
API_URL=https://api.monservice.com
LOG_LEVEL=info
REDIS_URL=redis://cache.internal:6379
```

### Secrets

Pour les valeurs sensibles : cles API, mots de passe, tokens. Chiffres et jamais exposes dans les logs.

```bash
# .secrets — Variables sensibles (chiffrees)
DATABASE_URL=●●●●●●●●●●●●●●●●●●●●●●●●
STRIPE_SECRET_KEY=●●●●●●●●●●●●●●●●●●●●
JWT_SECRET=●●●●●●●●●●●●●●●●●●●●●●●●●●
```

Vous gerez tout depuis l'interface Nubiecloud. Les valeurs sont injectees au demarrage de votre application, isolees entre les environnements (dev, staging, production).

## Environnements multiples

Un bon workflow implique plusieurs environnements. Nubiecloud vous permet de creer autant d'environnements que necessaire par projet :

- **Development** : pour les tests en cours de developpement
- **Staging** : replique de production pour les tests d'integration
- **Production** : l'environnement live

Chaque environnement a ses propres variables, ressources et URL. Vous pouvez deployer des branches differentes sur chaque environnement.

## Monitoring en temps reel

Apres le deploiement, Nubiecloud collecte automatiquement les metriques de votre application :

- **CPU** : utilisation en temps reel et historique
- **Memoire** : consommation RAM avec alertes de seuil
- **Reseau** : trafic entrant/sortant
- **Disque** : utilisation du stockage persistant

Le dashboard est accessible directement depuis la console, avec des periodes configurables (15 min, 1h, 6h, 24h, 7 jours) et un rafraichissement automatique.

Les logs sont egalement disponibles en temps reel, avec filtrage par service et instance.

## Comparaison avec un setup CI/CD manuel

| | CI/CD manuel (GitHub Actions) | Nubiecloud |
|---|---|---|
| Configuration initiale | Ecrire le workflow YAML | Zero config |
| Gestion des secrets | GitHub Secrets + injection manuelle | Interface integree |
| Build | Configurer Docker-in-Docker | Automatique |
| Registry d'images | Configurer les credentials | Integre |
| Deploiement | Ecrire les manifestes + kubectl | Automatique |
| SSL/TLS | Configurer manuellement | Automatique |
| Monitoring | Installer et configurer | Dashboard integre |
| Temps de mise en place | 1-3 jours | 5 minutes |

## Langages et frameworks supportes

Nubiecloud detecte automatiquement votre stack :

- **JavaScript/TypeScript** : Next.js, React, Vue.js, Express, NestJS
- **Python** : Django, FastAPI, Flask
- **PHP** : Laravel
- **Go** : Gin et applications Go standards
- **Java** : Spring Boot
- **Ruby** : Rails
- **.NET** : Applications .NET

Si votre projet contient un `Dockerfile`, Nubiecloud l'utilise directement. Pour les projets Docker Compose multi-services, la detection est egalement automatique.

## Passez au deploiement continu

Arretez de passer des heures a configurer des pipelines CI/CD. Connectez votre depot, configurez vos variables, et laissez Nubiecloud gerer le reste.

```bash
$ git push origin main
# ... et c'est en production.
```

[Essayer gratuitement →](https://console.nubiecloud.io/register)
