#!/bin/bash

if (( RANDOM % 2 == 0 )); then
  echo "left"
else
  echo "right"
fi
