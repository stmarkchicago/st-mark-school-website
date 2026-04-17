#!/bin/bash

# St. Mark School Website - GitHub Push Script
# Run this with: bash push-to-github.sh YOUR_GITHUB_TOKEN

if [ -z "$1" ]; then
    echo "❌ Error: Please provide your GitHub token"
    echo "Usage: bash push-to-github.sh YOUR_GITHUB_TOKEN"
    exit 1
fi

TOKEN=$1

echo "🚀 Pushing St. Mark School Website to GitHub..."

cd /app

# Push using the token
git push https://${TOKEN}@github.com/stmarkchicago/st-mark-school-website.git main

if [ $? -eq 0 ]; then
    echo "✅ Success! Your code is now on GitHub!"
    echo "🔗 View it at: https://github.com/stmarkchicago/st-mark-school-website"
else
    echo "❌ Push failed. Please check your token and try again."
fi
