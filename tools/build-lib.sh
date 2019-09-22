#!/usr/bin/env bash

lib="$1"

if [[ "$lib" != "" ]] ; then
    ./node_modules/.bin/rimraf dist/"$lib"
    npx ng build @"$lib"

    scssConfig=libs/"$lib"/scss-bundle.config.json
    if test -f "$scssConfig"; then
        npx scss-bundle -c "$scssConfig"
    fi
else
    echo "build lib param errors"
    exit 1
fi
