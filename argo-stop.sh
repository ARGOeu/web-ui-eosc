#!/bin/bash
cd /opt/argo-eosc
HTTP_DISABLE=`sed ${0%/*}/../etc/service/service.properties -e '/^lavoisier.http.disable=/!d' -e 's/^lavoisier.http.disable=//'`
if test "${HTTP_DISABLE}" = "true" ; then
    PORT=`sed ${0%/*}/../etc/service/service.properties -e '/^lavoisier.https.port=/!d' -e 's/^lavoisier.https.port=//'`
else
    PORT=`sed ${0%/*}/../etc/service/service.properties -e '/^lavoisier.http.port=/!d' -e 's/^lavoisier.http.port=//'`
fi
curl http://localhost:${PORT}/lavoisier/restart