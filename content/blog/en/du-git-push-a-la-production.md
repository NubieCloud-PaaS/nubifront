---
title: "From git push to production in 5 minutes"
date: "2026-02-15"
author: "The Nubiecloud team"
tags: ["CI/CD", "Deployment", "Git", "Automation"]
description: "How Nubiecloud turns every git push into an automatic deployment, with build, tests and release to production in minutes."
image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=1200&h=630&fit=crop"
readingTime: 9
---

A few years ago, shipping an application to production was an event. You planned maintenance windows, you wrote runbooks, you crossed your fingers.

Today, the best teams deploy dozens of times a day. What they have in common is a CI/CD pipeline that turns every commit into a deployment. The trouble is that configuring that pipeline often takes longer than writing the feature itself.

We wanted to change that. On Nubiecloud, every `git push` triggers a complete deployment automatically: framework detection, optimised build, tests, and a release with no downtime. And there is no pipeline for you to configure.

## The workflow: git push, and that's it

Here is what happens when you push code to your main branch:

```bash
$ git add .
$ git commit -m "feat: add shopping cart"
$ git push origin main
```

From there, everything is automatic. Nubiecloud receives the webhook from your Git repository and starts the process.

## The four stages of a deployment

### 1. Detection and analysis (a few seconds)

Nubiecloud reads your `package.json`, `requirements.txt`, `go.mod`, `pom.xml` or `composer.json` to identify your stack and its version automatically. Framework, runtime, package manager, build and start commands: all detected, with no configuration from you.

### 2. Secure build (1 to 3 minutes)

Your application is built in an isolated environment. Nubiecloud uses smart build caches: if only your source files changed (not your dependencies), the build reuses the cached layers. Later builds are three to five times faster than the first.

### 3. Deployment (30 to 60 seconds)

Deployment is zero-downtime. New instances start and pass their health checks before the old ones are stopped. Your users see nothing.

### 4. Post-deployment (automatic)

SSL verified, CDN cache purged, DNS configured, monitoring active. Your app is live.

Total time: under five minutes, on every push.

## Rollback: the safety net

A bug in production right after a deployment? It happens to everyone. What matters is how fast you can react.

Nubiecloud keeps a full history of every deployment. You can go back to any previous version in seconds, with no rebuild: we keep the images of your previous versions, so rolling back is close to instant.

Everything is traced — who deployed what, when, and from which commit. Useful for debugging, and useful for auditing.

## Variables and secrets

This is one part we took particular care over, because it is often where teams make security mistakes.

**Environment variables** (API URLs, feature flags, application config) and **secrets** (API keys, passwords, tokens) are handled separately. Secrets are encrypted and never exposed in logs.

You manage everything from the Nubiecloud interface. Values are injected at start-up and isolated between environments: dev, staging, production. No risk of pushing a production `.env` into the wrong environment.

## Multiple environments

A good workflow means several environments. We support the usual ones — development, staging, production — and you can create as many as you need.

Each environment has its own variables, resources and URL. You can deploy a different branch to each one, which is handy for testing a feature branch in staging before merging into main.

## Built-in monitoring

After a deployment, Nubiecloud collects metrics automatically: CPU, memory, network, disk. The dashboard is in the console, with configurable time ranges (15 minutes to 7 days) and automatic refresh.

Logs are available in real time, filtered by service and instance. No need to install Datadog or Grafana.

## Compared with a hand-built CI/CD

| | Manual CI/CD (GitHub Actions) | Nubiecloud |
|---|---|---|
| Initial setup | Write the YAML workflow | Nothing to configure |
| Secret management | GitHub Secrets + manual injection | Built-in interface |
| Build | Configure Docker-in-Docker | Automatic |
| Image registry | Configure credentials | Built in |
| Deployment | Write manifests + kubectl | Automatic |
| SSL/TLS | Configure by hand | Automatic |
| Monitoring | Install and configure | Built-in dashboard |
| Time to set up | 1-3 days | 5 minutes |

## Supported languages and frameworks

Nubiecloud detects your stack automatically:

- **JavaScript/TypeScript**: Next.js, React, Vue.js, Express, NestJS
- **Python**: Django, FastAPI, Flask
- **PHP**: Laravel
- **Go**: Gin and plain Go applications
- **Java**: Spring Boot
- **Ruby**: Rails
- **.NET**: .NET applications

And if your project contains a `Dockerfile`, we use it directly. Multi-service Docker Compose is supported too.

## In closing

If you spend more time configuring pipelines than writing features, something is probably wrong. We built Nubiecloud so that deployment is the simplest part of your day, not the most stressful.

The free plan is available, with no credit card. Connect your repository and see for yourself.

[Create a Nubiecloud account](https://console.nubiecloud.io/register)
