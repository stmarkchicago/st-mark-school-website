#!/bin/bash

# Update CMS configuration and push to GitHub

echo "Updating CMS configuration..."
git add public/admin/config.yml
git commit -m "Fix CMS config for production"
git push origin main

echo ""
echo "✅ Done! Check Netlify - it should rebuild automatically."
echo "Once the build is complete, visit https://smcschool.netlify.app/admin/"
