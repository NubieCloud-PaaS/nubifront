---
title: "WordPress, Odoo, Dolibarr: deploy your SaaS in one click"
date: "2026-02-10"
author: "The Nubiecloud team"
tags: ["SaaS", "WordPress", "Odoo", "ERP", "1-Click"]
description: "No more configuring servers to deploy WordPress or Odoo. Nubiecloud offers preconfigured templates you can deploy in one click."
image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop"
readingTime: 8
---

You want to deploy a WordPress site for a client. An Odoo for your company's accounting. A Dolibarr to run a small business.

We all know the classic script by heart: rent a VPS, install Linux, configure Apache or Nginx, install PHP or Python, create the database, download the application, set the permissions, get an SSL certificate... Count three hours minimum per installation. And then you have to maintain all of it.

We thought there had to be a better way.

## The headache of manual installs

### WordPress: simple in theory, painful in practice

```bash
# The traditional workflow...
sudo apt update && sudo apt install apache2 php php-mysql
sudo mysql -u root -e "CREATE DATABASE wordpress;"
wget https://wordpress.org/latest.tar.gz
tar -xzf latest.tar.gz
sudo mv wordpress/* /var/www/html/
sudo chown -R www-data:www-data /var/www/html/
# Configure wp-config.php...
# Configure the Apache virtual hosts...
# Configure Let's Encrypt...
# Configure the WordPress crons...
```

Everyone says WordPress is easy to install. That is true once you have done it fifty times. For everyone else, each step is a chance to get something wrong. And once it is installed, you have to handle updates, backups, security and monitoring. Every week.

### Odoo: another level of complexity

Odoo needs Python, PostgreSQL, specific system dependencies, wkhtmltopdf for PDF reports, a reverse proxy, and workers sized correctly. A clean install easily takes half a day. Multiply that by your number of clients and you have a real scaling problem.

## Nubiecloud templates

We built preconfigured templates for the most requested applications. The idea is simple: pick your app, fill in three or four fields, click, and it is in production.

Each template includes the application in its latest stable version, a preconfigured database (PostgreSQL for Odoo, MySQL for WordPress), an automatic SSL certificate and monitoring (platform backups cover managed PostgreSQL — see our terms of service).

### What is available today

| Application | Type | Database | Ready in |
|---|---|---|---|
| WordPress | CMS / blog | MySQL | ~2 min |
| Odoo | ERP / CRM | PostgreSQL | ~3 min |
| Dolibarr | ERP / management | MySQL | ~2 min |
| ERPNext | Full ERP | MariaDB | ~3 min |
| ERP5 | Industrial ERP | — | ~3 min |

## How it works

It is deliberately simple. In the Nubiecloud console, select the "ERP/SaaS" type, choose your application, then enter a project name, your admin email and a password. Confirm.

Within two to three minutes, your application is reachable over HTTPS. Every project is fully isolated.

## A few concrete examples

### A web agency deploying 10 WordPress sites in one morning

Before, deploying ten WordPress sites meant configuring ten servers — or one complicated shared server with virtual hosts everywhere.

With templates: at 9:00, three sites deployed in ten minutes. At 9:30, the custom domains configured. At 10:00, the other seven deployed. At 10:30, everything in production with SSL. Each site is isolated, so a problem with one does not affect the others.

### A small business moving to Odoo

A small business needs an ERP for accounting, stock and sales. Deploy Odoo in three minutes, sign in to the admin interface, install the modules you need (accounting, stock, sales, CRM), and start working. The PostgreSQL database is managed by Nubiecloud, with automatic backups and performance monitoring.

### A non-profit on Dolibarr

Dolibarr is an excellent open-source tool for non-profits: member management, subscription tracking, invoicing. In one click, everything is in place, with a provisioned and monitored database.

## Managed databases

Beyond the templates, we also offer managed databases for your own projects:

| Database | Typical use | Included |
|---|---|---|
| PostgreSQL | Modern applications, APIs | Backups, monitoring, high availability |
| MySQL | WordPress, PHP applications | Monitoring |
| MongoDB | NoSQL, real time, catalogues | Monitoring |
| Redis | Cache, sessions, message queues | Monitoring |

Every database is provisioned with secure credentials and performance monitoring. Automatic backups cover PostgreSQL.

## Template security

We take security seriously. Each template is isolated in its own environment, images are verified and updated regularly, SSL/TLS is automatic, and passwords are encrypted. Database credentials are generated automatically and stored encrypted — never in clear text in a configuration file.

## Pricing

Templates are included in every plan, the free one included. You only pay for the resources you use. A basic WordPress (blog, brochure site) fits on the FREE plan. An Odoo for a small business with 20 users and the accounting, stock and CRM modules runs on the PROFESSIONAL plan.

## Stop configuring servers

If you still spend hours installing WordPress on VPSs or configuring Odoo by hand, we honestly think it is worth trying something else. That is what the free plan is for.

[Try the Nubiecloud templates](https://console.nubiecloud.io/register)
