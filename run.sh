#!/bin/bash

# Run npm build
npm run build

# Copy build contents to root
cp -r build/* .

# Add all files
git add .

# Commit changes with a commit message
git commit -m "Adding more facts about Raj"

# Push changes to remote repository
git push