#!/bin/bash

ENV_FILE=$1
SCP_NAME=$2

npm run version-inc
sed -i "s|^\\(PUBLIC_VERSION=\\).*|\1$(jq '.version' -r package.json)|" $ENV_FILE
rm ${SCP_NAME}.zip
zip -r ${SCP_NAME}.zip . -x node_modules/**\* build/**\*
scp ${SCP_NAME}.zip anda-$SCP_NAME@oracle.anda.fun:/home/anda-$SCP_NAME/
rm -f sed*
rm -f ${ENV_FILE}e