---
title: 'Using Multiple PHP Versions in XAMPP'
description: 'A simple method to manage and switch between multiple PHP versions in XAMPP using easy-to-use batch files.'
date: '2022-11-30'
image: '/images/blogs/use-multiple-php-in-xampp/feature-image.png'
tags:
  - Tutorial
  - XAMPP
  - PHP
---

This method provides one of the easiest and most effective ways to use multiple `PHP` versions in `XAMPP`. It eliminates the need to remember all the configuration files and code for switching to another PHP version or making changes in the Env setting.The process of switching versions can be easily accomplished by running a `.bat` file.

_(Note: I have tested this with the latest version of XAMPP. I am unsure if it works with lower versions.)_

## 1. Download the Latest XAMPP Version

If you already have the latest XAMPP version installed, proceed to Step 2. Otherwise, download and install the latest version of XAMPP from [apachefriends](https://www.apachefriends.org/). For example, I downloaded version `8.2.12` _(which is the current latest version that contains PHP 8.2.4)_.

![Download Latest XAMPP Version](/images/blogs/use-multiple-php-in-xampp/download-latest-xampp-ver.png)

## 2. Download the Lower XAMPP Version

Find the XAMPP version that includes the PHP version you want to use on [SourceForge](https://sourceforge.net/projects/xampp/files/).Download XAMPP in a `zip` file and extract it to a suitable location. For instance, I downloaded version `7.4.33`.

![Download Latest XAMPP Version](/images/blogs/use-multiple-php-in-xampp/download-lower-xampp-ver.png)

> For XAMPP versions greater than or equal to `5.5.19`, they mostly include the same version of PHP. (For example, XAMPP version `7.4.33` includes PHP version `7.4.33`.)

## 3. Add PHP Folders

Change the name of the current `php` folder inside `C:\xampp` to the name of the current PHP version. For instance, if my current PHP version is 8.2.4, I would change the name `php` to `php-8.2.4`. 

Copy the new `php` folder from the extracted zip of lower XAMPP version to `C:\xampp` and also change its name to the corresponding PHP version (e.g., `php-7.4.33`).

![Add PHP Folders](/images/blogs/use-multiple-php-in-xampp/add-php-folders.png)

## 4. Add httpd-xampp Files

Change the name of the current `httpd-xampp.conf` file inside `C:\xampp\apache\conf\extra` to the name of the current PHP version. For instance, if my current PHP version is 8.2.4, I would change the name `httpd-xampp.conf` to `httpd-xampp-php-8.2.4.conf`. 

Copy the new `httpd-xampp.conf` file from the extracted zip of lower XAMPP version to `C:\xampp\apache\conf\extra` and change its name to the corresponding PHP version (e.g., `httpd-xampp-php-7.4.33.conf`).

![Add httpd-xampp.conf files](/images/blogs/use-multiple-php-in-xampp/add-httpd-xampp-confs.png)

## 5. Add BAT Files

Create a new folder call `php-switch` in `C:\xampp`. And create a `set-php-8.2.4.bat` file inside `php-switch` folder. Copy and add the following command to the `set-php-8.2.4.bat` file:

```batch,file=set-php-8.2.4.bat
@echo off
rmdir C:\xampp\php
mklink /J C:\xampp\php C:\xampp\php-8.2.4
del C:\xampp\apache\conf\extra\httpd-xampp.conf
copy C:\xampp\apache\conf\extra\httpd-xampp-php-8.2.4.conf C:\xampp\apache\conf\extra\httpd-xampp.conf
echo The version of PHP 8.2.4 is set
pause
```

Similarly, create a `set-php-7.4.33.bat` file inside `C:\xampp\php-switch`. Copy and add the following command to the `set-php-7.4.33.bat` file:

```batch,file=set-php-7.4.33.bat
@echo off
rmdir C:\xampp\php
mklink /J C:\xampp\php C:\xampp\php-7.4.33
del C:\xampp\apache\conf\extra\httpd-xampp.conf
copy C:\xampp\apache\conf\extra\httpd-xampp-php-7.4.33.conf C:\xampp\apache\conf\extra\httpd-xampp.conf
echo The version of PHP 7.4.33 is set
pause
```

![Add bat files](/images/blogs/use-multiple-php-in-xampp/add-bat-files.png)

## 6. Switch PHP Version

Now, you can switch the PHP version by running these `.bat` files.

## 7. Add More PHP Versions

You can add more PHP versions by following a similar process.

I hope this helps! Let me know if you have any further questions or if there's anything else I can assist you with.

> **Disclaimer:** The actual idea is not mine; I got it from an unknown source, and I am unable to trace the origin.
