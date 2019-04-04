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
* firewall-cmd --add-service=http --permanent
* firewall-cmd --add-service=https --permanent
* firewall-cmd --reload

# Installation of CAs

Add the following repo-file to the /etc/yum.repos.d/ directory:

```
[EGI-trustanchors]
name=EGI-trustanchors
baseurl=http://repository.egi.eu/sw/production/cas/1/current/
gpgkey=http://repository.egi.eu/sw/production/cas/1/GPG-KEY-EUGridPMA-RPM-3
gpgcheck=1
enabled=1
```

* yum install ca-policy-egi-core

# Installation

* git clone https://gitlab.in2p3.fr/cc-in2p3-dev/argo-eosc.git
* add a certificate
* configure the instance as described below

## Configuration - etc/app/app-hidden.files
* add the file and add values to access spmt, api and certificates
* add API key into the etc/app/app-hidden.files, $tenant.api.key = yourKey

```
    ### EUDAT DPMT
    eudat-api-user =
    eudat-api-pwd =

    ### APIKEYS
    ???.api.key=


    ### CERTIFICATES
    certificate.password =
    certificate.path =
```
* manage the app version and instance into etc/engine/html.properties
* manage the ports into etc/service/service.properties



## Add a new tenant $tenant

* add the tenant properties into etc/app/resources/tenants.xml
* copy the file etc/app/html/adminlte/dist/css/adminlte.min.css in the same directory under name adminlte-$tenant.css


## Customize a new tenant $tenant

* add the route for the alias into /etc/service/route.properties, your_alias/ = dashboard?tenant=$tenant
* add a logo for the tenant etc/app/img : logo-$tenant.png
* modify the adminlte-$tenant.css to adapt it



## Links and further reading

* http://software.in2p3.fr/lavoisier/


