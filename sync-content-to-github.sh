#!/bin/bash

# Sync Content Updates to GitHub
# Run this script whenever you update CMS collections or config

echo "🔄 Syncing content updates to GitHub..."

# Check if git is initialized
if [ ! -d .git ]; then
    echo "❌ Git not initialized. Initializing now..."
    git init
    git branch -M main
fi

# Add all content files
echo "📦 Adding updated files..."
git add src/content/
git add public/admin/
git add package.json
git add netlify.toml
git add public/admin/config.yml

# Show what's being committed
echo ""
echo "📋 Files to be committed:"
git status --short

# Commit changes
echo ""
read -p "Enter commit message (or press Enter for default): " commit_msg
if [ -z "$commit_msg" ]; then
    commit_msg="Update CMS collections and content"
fi

git commit -m "$commit_msg"

# Push to GitHub
echo ""
echo "🚀 Pushing to GitHub..."
git push origin main

echo ""
echo "✅ Done! Your changes are now on GitHub."
echo "🌐 Netlify will automatically deploy the updates in a few minutes."
echo ""
echo "Check your Netlify dashboard to see the deployment progress."
