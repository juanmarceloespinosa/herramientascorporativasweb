#!/bin/bash

npm run version-inc
sed -i "s|^\\(PUBLIC_VERSION=\\).*|\1$(jq '.version' -r package.json)|" .env.production
rm herramientas.zip
zip -r herramientas.zip . -x node_modules/**\* build/**\*
scp herramientas.zip anda-herramientas@oracle.anda.fun:/home/anda-herramientas/
rm -f sed*
rm -f .env.productione