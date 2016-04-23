#!/bin/sh

while read line; do
    echo $line > data.json
done
