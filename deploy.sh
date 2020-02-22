#!/bin/bash

echo "[L] Make deploy_git directory..."
mkdir deploy_git
cd deploy_git

echo "[L] Initializing git..."
git init .
git remote add origin-pages "https://${GITHUB_TOKEN}@github.com/${GITHUB_REPO}.git"
git checkout -b ${TARGET_BRANCH_DEPLOY}
git pull origin-pages ${TARGET_BRANCH_DEPLOY}

echo "[L] Remove all files..."
rm -rvf ./*
mv -v ../build/* ./

echo "[L] Add all files to staged area..."
git add .

echo "[L] Committing..."
git commit -m "Deploy to github pages $TRAVIS_BUILD_NUMBER"

echo "[L] Push to ${TARGET_BRANCH_DEPLOY} branch"
git push --force origin-pages ${TARGET_BRANCH_DEPLOY}
