#!/usr/bin/env bash

npm version patch --no-git-tag-version
sed -i "s|^\\(PUBLIC_VERSION=\\).*|\1$( jq '.version' -r package.json)|" .env.production
echo "Version Production: $( cat .env.production | grep 'PUBLIC_VERSION' | cut -d= -f2)"
