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

* add a css file into etc/app/html/adminlte/dist/css, the name should adminlte-$tenant.css
* add availability and reliability tresholds into app.properties
* add key into the tenants.json file /etc/app/resources
* add the route for the alias into route.properties
* add the different entries for the tenant into etc/app/html/sidebar.html
* add a logo for the tenant etc/app/img : logo-$tenant.png
* add lines for the report and for the description into the commons.xml file , reportDetails view


## Links and further reading

* http://software.in2p3.fr/lavoisier/


