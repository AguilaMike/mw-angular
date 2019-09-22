#!/usr/bin/env bash

app="$1"
env="$2"

if [[ "$app" != "" && "$env" != "" ]] ; then
    ./node_modules/.bin/rimraf dist/"$app"
    ./tools/build-all-libs.sh
    ./tools/build-app-ci.sh "$app" "$env"
else
    echo "build app param errors"
    exit 1
fi
