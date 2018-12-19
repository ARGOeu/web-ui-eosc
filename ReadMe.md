---
title: Web UI | ARGO
---

## Description
# Web UI module for the ARGO Framework

* based on Lavoisier Framework - http://software.in2p3.fr/lavoisier
* prerequisites : a server certificate and java (version prior to 1.8 or 8 )
* no services running on port 80 and 443


# prerequisites (CENTOS installation)

* yum install java
* yum install maven
* yum install git
* yum install wget




## Add a new tenant $tenant

* add the tenant properties into etc/app/resources/tenants.xml
* add API key into the etc/app/app-hidden.files
* copy the file etc/app/html/adminlte/dist/css/adminlte.min.css in the same directory under name adminlte-$tenant.css


## Customize a new tenant $tenant

* add the route for the alias into route.properties
* add a logo for the tenant etc/app/img : logo-$tenant.png
* modify the adminlte-$tenant.css to adapt it



## Links and further reading

* http://software.in2p3.fr/lavoisier/


