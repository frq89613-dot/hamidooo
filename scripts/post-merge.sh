#!/bin/bash
set -e
npm ci
npm --workspace=lib/db run push
