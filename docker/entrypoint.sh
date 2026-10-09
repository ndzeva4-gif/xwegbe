#!/usr/bin/env bash
set -e

echo "Caching config..."
php artisan config:cache

echo "Caching routes..."
php artisan route:cache

echo "Caching views..."
php artisan view:cache

echo "Linking storage..."
php artisan storage:link || true

echo "Running migrations..."
# Retry jusqu'à 10 fois si la DB n'est pas encore prête
for i in $(seq 1 10); do
    php artisan migrate --force && break
    echo "DB not ready, retry $i/10..."
    sleep 3
done

echo "Starting server on port ${PORT:-10000}..."
exec php artisan serve --host=0.0.0.0 --port="${PORT:-10000}"
