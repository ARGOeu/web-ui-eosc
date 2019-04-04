#!/bin/bash
if [ -z "$M2_HOME" ] ; then
    export M2_HOME=/usr/share/maven
fi
sed /usr/bin/mvn \
    -e 's|plexus-classworlds-\*.jar|plexus-classworlds.jar:${HOME}/.m2/repository/com/sun/mail/logging-mailhandler/1.6.2/logging-mailhandler-1.6.2.jar:${HOME}/.m2/repository/com/sun/mail/javax.mail/1.6.2/javax.mail-1.6.2.jar|' \
    -e 's|$@|exec:java|' \
| sh
