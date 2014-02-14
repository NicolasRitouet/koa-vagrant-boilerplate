Koa + vagrant
-------------

Sample project to bootstrap your koa app with vagrant.

Installs
========
- git
- nodejs 0.11.11
- nodemon (globally)


Usage
=====
````
$ vagrant plugin install vagrant-librarian-chef
$ vagrant up
$ vagrant ssh
$ nodemon index.js --harmony
````

TODO
====
- get rid of librarian-chef
- start nodemon automatically after vagrant up
- replace chef solo with bash script