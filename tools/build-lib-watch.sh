#!/usr/bin/env bash

lib="$1"

if [[ "$lib" != "" ]] ; then
    rimraf dist/"$lib"
    npx ng build @"$lib" --watch
else
    echo "param errors"
    exit 1
fi
