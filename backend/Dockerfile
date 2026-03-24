FROM php:8.4-cli

WORKDIR /var/www

# 必要な拡張
RUN apt-get update && apt-get install -y \
    git unzip curl libzip-dev \
    && docker-php-ext-install pdo pdo_mysql zip

# Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

COPY . .

RUN composer install

CMD php artisan serve --host=0.0.0.0 --port=8000