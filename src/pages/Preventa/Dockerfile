FROM php:7.4.10-apache

ADD https://raw.githubusercontent.com/mlocati/docker-php-extension-installer/master/install-php-extensions /usr/local/bin/

RUN chmod uga+x /usr/local/bin/install-php-extensions && sync

RUN \
    apt-get update -y && \
    apt-get upgrade -f -y

RUN apt-get install -y\
    iputils-ping \
    net-tools \
    curl \
    zlib1g-dev \ 
    libzip-dev \
    libpng-dev \ 
    unzip \ 
    libicu-dev
RUN docker-php-ext-install \
    zip \
    pdo_mysql \ 
    gd \
    intl

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
