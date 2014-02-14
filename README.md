[Koa](http://koajs.com/) + [vagrant](http://www.vagrantup.com/)
-------------

Sample project to bootstrap your koa app with vagrant.

Installs
========
- git
- nodejs 0.11.11 (it lasts a while, be patient)
- nodemon (globally installed)


Required
=====
- [Virtualbox](https://www.virtualbox.org/wiki/Downloads)
- [Vagrant](http://www.vagrantup.com/downloads.html)

Usage
=====
````bash
$ vagrant plugin install vagrant-librarian-chef
$ vagrant up
$ vagrant ssh
$ nodemon index.js --harmony
````
Open your browser at this address:
````
http://192.168.33.10:3000/
```

Note
====
The admin password of your host machine will be asked to enable the NFS shares, don't panic, set :nfs to false on config.vm.synced_folder param if you don't want to. 

TODO
====
- start nodemon automatically after vagrant up
- nodemon doesn't detect file changes and therefore doesn't reload
- replace chef solo with bash script
- add koa-routes and clean code
- find out how to deactivate password prompt (password is "vagrant" btw)