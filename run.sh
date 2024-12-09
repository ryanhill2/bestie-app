#!/bin/bash

# Run npm build
npm run build

# Copy build contents to root
cp -r build/* .

# Add all files
git add .

# Commit changes with a commit message
git commit -m "Starting point"

# Push changes to remote repository
git push