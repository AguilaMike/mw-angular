#!/usr/bin/env bash

app="$1"
env="$2"

if [[ "$app" != "" && "$env" != "" ]] ; then
    rimraf dist/"$app"
    ./tools/build-all-libs.sh
    ng build "$app" --delete-output-path --configuration "$env"
    ng run "$app":server --delete-output-path
    webpack --config ./apps/"$app"/webpack.server.config.js --progress --colors
    node dist/"$app"/prerender.js
else
    echo "param errors"
    exit 1
fi