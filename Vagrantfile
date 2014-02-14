# -*- mode: ruby -*-
# vi: set ft=ruby :


require 'rbconfig'
IS_WINDOWS = (RbConfig::CONFIG['host_os'] =~ /mswin|mingw|cygwin/) ? true : false

Vagrant.configure("2") do |config|

  config.vm.box = "precise32"

  config.vm.box_url = "http://files.vagrantup.com/precise32.box"

  config.vm.hostname = "nodejsVagrant"

  config.vm.network :forwarded_port, guest: 3000, host: 3000
  config.vm.network :private_network, ip: "192.168.33.10"

  config.vm.synced_folder ".", "/home/vagrant", :nfs => !IS_WINDOWS

  config.vm.provider :virtualbox do |vb|
    vb.customize ["modifyvm", :id, "--memory", "1024"]
    # vb.customize ["setextradata", :id, "VBoxInternal2/SharedFoldersEnableSymlinksCreate/proj-name", "1"]
  end
  config.vm.provision :chef_solo do |chef|
    chef.cookbooks_path = "cookbooks"
    chef.add_recipe "apt"
    chef.add_recipe "build-essential"
    chef.add_recipe "nodejs"
    chef.add_recipe "vim"
    chef.add_recipe "git"

    chef.json = {
      "nodejs" => {
        "version" => "0.11.11"
      }
    }
  end
  config.vm.provision :shell, :inline => "npm install -g nodemon"
  config.vm.provision :shell, :inline => "npm install"
end