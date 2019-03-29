#!/bin/bash
PORT=`sed ${0%/*}/../etc/service/service.properties -e '/^lavoisier.http.port=/!d' -e 's/^lavoisier.http.port=//'`
curl http://localhost:${PORT}/lavoisier/restart