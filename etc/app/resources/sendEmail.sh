#!/bin/bash


SUBJECT="[ARGO] Recomputation request #$2"
URL=$3
EMAIL="$1,$4"

function urldecode() { : "${*//+/ }"; echo -e "${_//%/\\x}"; }

SUMMARY= y=$(urldecode "$6")

if [ $# -eq 6 ]
  then
     /usr/bin/mail -r $5 -s "$SUBJECT" -S "From: no-reply@argo.grnet.gr"  "$EMAIL" << EOF

Dear User,

Your recomputation request has been registered :
$URL

-----------------------------------------------
Details
-------

$SUMMARY

-----------------------------------------------
ARGO TEAM

-- Mail generated automatically by the ARGO application
EOF
    echo "<EmailSent><param>$1</param><param>$2</param><param>$3</param><param>$4</param><param>$5</param></EmailSent>" ;
else
    echo "<Error><param>$1</param><param>$2</param><param>$3</param><param>$4</param><param>$5</param></Error>"  ;
fi