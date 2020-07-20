#!/bin/bash

ENV_FILE="$(pwd)/.env"

if [ -r "${ENV_FILE}" ]; then
    echo "Found local config (${ENV_FILE}), sourcing..."
    source "${ENV_FILE}"
else
    echo "No .env file found, aborting..."
    exit 1
fi

psql postgres -c "CREATE DATABASE ${DB}"
#PGPASSWORD="${PG_PASSWORD}" psql -U "${DB_USER}" -h "${DB_HOST}" -a < "__init__.sql"
psql -h "${DB_HOST}" -d "${DB}" -U "${DB_USER}" -p "${DB_PORT}" -a -w -f db/__init__.sql

echo "All done".
