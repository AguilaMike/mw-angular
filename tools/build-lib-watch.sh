#!/usr/bin/env bash

lib="$1"

if [[ "$lib" != "" ]] ; then
    ./node_modules/.bin/rimraf dist/"$lib"
    npx ng build @"$lib" --watch
else
    echo "param errors"
    exit 1
fi
