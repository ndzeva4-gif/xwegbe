# Stage 1 : build (PHP + Node — wayfinder appelle php artisan pendant npm run build)
FROM php:8.4-cli AS builder

RUN apt-get update && apt-get install -y --no-install-recommends \
        curl git unzip libzip-dev libpq-dev \
    && curl -fsSL https://deb.nodesource.com/setup_22.x | bash - \
    && apt-get install -y --no-install-recommends nodejs \
    && docker-php-ext-install pdo_mysql pdo_pgsql mbstring zip bcmath \
    && rm -rf /var/lib/apt/lists/*

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /app
COPY . .

# Dépendances PHP (artisan doit pouvoir booter pour wayfinder)
RUN composer install --no-dev --optimize-autoloader --no-interaction

# .env minimal pour que php artisan ne bloque pas sur APP_KEY manquant
RUN cp .env.example .env && php artisan key:generate

# Dépendances Node + build Vite (wayfinder peut maintenant appeler php artisan)
RUN npm ci && NODE_OPTIONS=--max-old-space-size=2048 npm run build

# Stage 2 : runtime (image finale allégée)
FROM php:8.4-cli

RUN apt-get update && apt-get install -y --no-install-recommends \
        unzip libzip-dev libpq-dev \
    && docker-php-ext-install pdo_mysql pdo_pgsql mbstring zip bcmath \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /var/www/html
COPY . .
COPY --from=builder /app/vendor   ./vendor
COPY --from=builder /app/public/build ./public/build

RUN mkdir -p storage/framework/{sessions,views,cache} bootstrap/cache \
    && chmod -R 775 storage bootstrap/cache \
    && chmod +x docker/entrypoint.sh

ENV APP_ENV=production
ENV APP_DEBUG=false
ENV LOG_CHANNEL=stderr

EXPOSE 10000

CMD ["/bin/bash", "/var/www/html/docker/entrypoint.sh"]
