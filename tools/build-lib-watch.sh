#!/usr/bin/env bash

lib="$1"

if [[ "$lib" != "" ]] ; then
    rimraf dist/"$lib"

    scssConfig=libs/"$lib"/scss-bundle.config.json
    if test -f "$scssConfig"; then
        npx concurrently --kill-others "npx ng build @$lib --watch" "npx scss-bundle -w libs/$lib/src/lib -c $scssConfig"
    else
        npx ng build @"$lib" --watch
    fi
else
    echo "param errors"
    exit 1
fi
