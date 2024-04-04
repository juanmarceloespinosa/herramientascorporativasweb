#!/bin/sh

# usage: ./run-env-mac.sh [LOCALHOST_URL]

LOCALHOST=${1:-192.168.1.200}
sed -i "s/localhost/$LOCALHOST/" .env