# Intro to Gulp: Workshop

This repo includes a [Vagrant](https://www.vagrantup.com/) box that has the relevant languages and tools needed to get started with the workshop initially.

If you don't have Vagrant already installed, see the ["getting started"](http://docs.vagrantup.com/v2/getting-started/index.html) guide on the Vagrant website for how to install and get going. This virtual machine setup uses VirtualBox as it's available on all major platforms.

_**Note:** this Vagrant box isn't needed if you have the relevant things installed on your system already (and a way to serve the files via a webserver). You need to have ruby, node and git installed with the ability to install Ruby Gems and node modules._

### Box Details

| Note | Info |
| :--- | :--- |
| Deploy Target | Local (VirtualBox) |
| OS | Ubuntu Trusty 14.04 LTS x64 |
| IP | 192.168.55.105 |
| Hostname | local.gulpworkshop |
| CPUs | 1 |
| RAM | 512MB |
| Folder Target | /var/www |
| Virtual Host | gulp.dev (www.gulp.dev) |
| Doc Root | /var/www/public |
| PHP | 5.6 |
| Ruby | 2.0.0-p481 |
| Nginx | 1.8 |

To get up and running with this box. Just clone this repo and run: `vagrant up` in the directory you cloned it into. This will create the VM the first time you run it, after that it'll boot the VM if it's not already booted. Once it's created you can SSH in with `vagrant ssh`.

The code of your project will live in the `/var/www/` directory.

To halt the VM, run `vagrant halt` from the host machine.

Once the vagrant box is created, you'll want to add the following line to your [hosts file](http://en.wikipedia.org/wiki/Hosts_%28file%29) `192.168.55.105 gulp.dev www.gulp.dev` (wherever it may reside on your host machine)


### Reference table for various useful commands
| Description | Command to run |
| --- | --- | 
| Create the VM | `vagrant up` |
| Boot the VM | `vagrant up` |
| SSH into the VM | `vagrant ssh` |
| Shut down the VM | `vagrant halt` |
| Destroy the VM | `vagrant destroy` |
| Install a Ruby Gem | `gem install {name} -v {version}` |
| Install a node module globally | `npm install -g {moduleName}` |
| Install a node module and save it to package.json | `npm install --save {moduleName}` |
| Install a node module and save it to package.json as a development dependency | `npm install --save-dev {moduleName}` |
| Install all modules in package.json | `npm install` |
| Install a components and save it to bower.json | `bower install --save {moduleName}` |
| Install all components in bower.json | `bower install` |
| Install gems bundled with the project | `bundle install` |
