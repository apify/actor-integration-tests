#!/bin/bash

set -ex

if [ "$APIFY_TEST_VARIABLE_1" == "expected-value-1" ]; then
    echo "Env variable passed succesfully"
else
    echo "Value of APIFY_TEST_VARIABLE_1 env var is not as expected"
    echo "Got '$APIFY_TEST_VARIABLE_1' expected 'expected-value-1'"
    exit 1
fi

if [ "$APIFY_TEST_VARIABLE_2" == "expected-value-2" ]; then
    echo "Env variable passed succesfully"
else
    echo "Value of APIFY_TEST_VARIABLE_2 env var is not as expected"
    echo "Got '$APIFY_TEST_VARIABLE_2' expected 'expected-value-2'"
    exit 1
fi