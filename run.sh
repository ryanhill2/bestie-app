#!/bin/bash

# Run npm build
npm run build

# Copy build contents to root
cp -r dist/* .

# Add all files
git add .

# Commit changes with a commit message
git commit -m "try to trigger github pages build"

# Push changes to remote repository
git push