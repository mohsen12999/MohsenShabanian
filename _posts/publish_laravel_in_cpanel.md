---
title: Publish Laravel App in CPanel Hosts
date: "2022-02-24"
type: article
lang: en
excerpt: 'Deploying Laravel application in CPanel Hosts is a little tricky.'
coverImage: "/img/blog/laravel_cpanel.png"
author:
  name: Mohsen Shabanian
  picture: '/img/me.jpg'
ogImage:
  url: "/img/blog/laravel_cpanel.png"
---

## Data Base

- Make database and user with wizard and define privilege user to access database.
- Copy `.env` file for server and write Database name and password.
- Export database from local database and import it to server via PHPMyAdmin.

## PHP Version

- change database version to your PHP. and add a package like zip or pdf.

## Copy File

- CPanel default route for running website in different to laravel. there is two way to solve this problem.

### Change route

this is easier way, but it is blocked in some host.
you must change from website route from `/public_html/` to `/public_html/`.

### Change files

if you can not change the default route, do this step

- rename public to public_html
- add this line to index.php under app definition

```php
$app->bind('path.public', function () {
    return __DIR__;
});
```
