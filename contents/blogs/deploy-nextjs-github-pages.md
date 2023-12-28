---
title: 'Deploy Next.js on GitHub Pages'
description: 'Learn how to effortlessly deploy your Next.js app on GitHub Pages using GitHub Actions, ensuring your project is readily accessible online.'
date: '2022-11-30'
image: '/images/blogs/deploy-nextjs-github-pages/feature-image.png'
tags:
  - Tutorial
  - Next.js
  - GitHub Pages
  - GitHub Actions
  - Deployment
---

If you've built a [Next.js](https://nextjs.org/) app and want to share it online, [GitHub Pages](https://pages.github.com/) provides a convenient way to host it for free. In this guide, I'll walk through the process of deploying your Next.js app to GitHub Pages using GitHub Actions. 

## Pre-requisites 
Make sure you have the following: 
- Installed Node.js and npm on your local machine
- GitHub Account

## Step 1: Create a Next.js App 

If you have already created a project, then skip this step. 
If not, create a Next.js app using the following commands: 
```
npx create-next-app@latest
```

## Step 2: Connect with GitHub Repository

1. Go to [GitHub](https://github.com/) and [create a new public repository](https://github.com/new) named **your_username.github.io**, where _username_ is your username (or organization name) on GitHub.
![Creat New Repo](/images/blogs/deploy-nextjs-github-pages/create-new-repo.png )

2. Link this GitHub Repo with your local Next.js project. 
```
git remote add origin https://github.com/<your_username>/<your_username>.github.io
```

3. Push your code into the GitHub repository. Run following command:
```
git add --all

git commit -m "Initial commit"

git branch -M main

git push -u origin main
```

## Step 3: Configure GitHub Pages

1. Go to  **settings**  >  **pages** of created GitHub repository.

![Goto Setting Page](/images/blogs/deploy-nextjs-github-pages/goto-setting-page.png)

2. Click to **deploy from a branch** and select **GitHub action.**

![Choose Git Action Option](/images/blogs/deploy-nextjs-github-pages/choose-git-action-option.png)

3. After selecting, you will see workflows to choose. In that, find **Next.js  GitHub action** and click **configure** button.

![Browser Git Action Workflow](/images/blogs/deploy-nextjs-github-pages/browser-git-action-workflow.png)

![Find and select Next.js](/images/blogs/deploy-nextjs-github-pages/find-and-select-nextjs.png)

4. Clicking **configure** will guide you to a ready-made workflow. Make some adjustments to suit your preferences or use origin, and then proceed to commit the code.

![Click to commit nextjs.yml](/images/blogs/deploy-nextjs-github-pages/click-to-commit-next-yml.png)

![Commit Change nextjs.yml](/images/blogs/deploy-nextjs-github-pages/commit-change-next-yml.png)

> If you are using Next.js 14, the original config file will not work smoothly and need some changes. It is currently work with <14 versions. 

>  For Next.js 14, use [this](https://github.com/dev-zha/dev-zha.github.io/blob/main/.github/workflows/nextjs.yml) config file instead of origin one or update shown in following:

Change node version to `18` and remove `next export`

![Change nextjs.yaml for 14](/images/blogs/deploy-nextjs-github-pages/change-nextjs-yaml-for-14.png)

To enable a static export, change the output mode inside `next.config.js`:

![Change nextjs.config for static export](/images/blogs/deploy-nextjs-github-pages/change-next-config-for-static-export.png)

## Step 4: Deployment Complete

After a few seconds, your Action will start running. Upon success, it will produce a URL and deploy your static site to GitHub Pages.

![Click to visit Site](/images/blogs/deploy-nextjs-github-pages/click-to-visit-site.png)

## Conclusion

Congratulations! You've successfully deployed your Next.js app to GitHub Pages using GitHub Actions. Now, your project is accessible to everyone on the internet.

If you want to see the app building process, you can look for the 'Actions' tag inside your GitHub repository.

![View Repo Actions](/images/blogs/deploy-nextjs-github-pages/view-repo-actions.png)