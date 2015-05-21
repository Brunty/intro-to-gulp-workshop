# Intro to Gulp: Workshop


## Notes about the workshop

We'll work along together in the workshop. I could have provided a repo with everything installed, running, configured, ready to just work on front-end things. But that wouldn't be any fun now would it?

I'm going to try and maintain branches for various stages of the progress through the work. But I'm not sure how successful that'll be. So if at any point you find yourself behind, or want to catch up quickly, I'll make sure my master branch is up to date and that can be checked out / pulled again.

## VM for the Workshop

This repo includes a [Vagrant](https://www.vagrantup.com/) box that has the relevant languages and tools needed to get started with the workshop initially.

If you don't have Vagrant already installed, see the ["getting started"](http://docs.vagrantup.com/v2/getting-started/index.html) guide on the Vagrant website for how to install and get going. This virtual machine setup uses VirtualBox as it's available on all major platforms.

_**Note:** this Vagrant box isn't needed if you have the relevant things installed on your system already (and a way to serve the files via a webserver). You need to have ruby, node and git installed with the ability to install Ruby Gems and node modules._

To get up and running with this box. Just clone this repo and run: `vagrant up` in the directory you cloned it into. This will create the VM the first time you run it, after that it'll boot the VM if it's not already booted. Once it's created you can SSH in with `vagrant ssh`.

The code of your project will live in the `/var/www/` directory.

To halt the VM, run `vagrant halt` from the host machine.

Once the vagrant box is created, you'll want to add the following line to your [hosts file](http://en.wikipedia.org/wiki/Hosts_%28file%29) `192.168.55.150 workshop.gulp www.workshop.gulp` (wherever it may reside on your host machine)



### Box Details

| Note | Info |
| :--- | :--- |
| Deploy Target | Local (VirtualBox) |
| OS | Ubuntu Trusty 14.04 LTS x64 |
| IP | 192.168.55.150 |
| Hostname | local.puphpet-gulp |
| CPUs | 1 |
| RAM | 512MB |
| Folder Target | /var/www |
| Virtual Host | workshop.gulp (www.workshop.gulp) |
| Doc Root | /var/www/public |
| PHP | 5.6 |
| Ruby | 2.0.0-p481 |
| Nginx | 1.8 |

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
