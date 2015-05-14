# Intro to Gulp: Workshop


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