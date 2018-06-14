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

# Open ports
* firewall-cmd --zone=public --add-port=80/tcp --permanent
* firewall-cmd --zone=public --add-port=443/tcp --permanent
* firewall-cmd --reload



# Installation of CAs

Add the following repo-file to the /etc/yum.repos.d/ directory:

[EGI-trustanchors]
name=EGI-trustanchors
baseurl=http://repository.egi.eu/sw/production/cas/1/current/
gpgkey=http://repository.egi.eu/sw/production/cas/1/GPG-KEY-EUGridPMA-RPM-3
gpgcheck=1
enabled=1

* yum install ca-policy-egi-core

## Installation & run

mvn exec:java


## Links and further reading

* http://software.in2p3.fr/lavoisier/


