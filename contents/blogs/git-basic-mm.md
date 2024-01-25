---
title: 'Git အခြေခံ'
description: 'Beginner များအတွက် Git အခြေခံကို နားလည်လွယ်ကူစေရန် ရှင်းလင်းဖော်ပြထားခြင်းဖြစ်သည်'
date: '2022-12-26'
image: '/images/blogs/git-basic/feature-image-mm.png'
tags:
  - Git
  - GitHub
  - VCS
  - Tutorial
---

## Prerequisite

- Git ကို အသုံးပြုမယ့် PC မှာ install ထားဖို့လိုမယ်. [Download Here](https://git-scm.com/downloads)
- Github Acc တစ်ခုလိုမယ် [Register Here](https://github.com/signup)
  _( အောက်ပါလုပ်ငန်းစဉ်တချို့ကို GitHubအသုံးပြုပြီး ရှင်းပြသွားမှာဖြစ်တဲ့အတွက် )_
- Git Acc ကို ကိုယ့်ရဲ့စက်ထဲမှာ login ဝင်ထားဖို့လိုမယ်

### Git Account Login

PC ထဲမှာ Git Account login ဝင်ထားပြီးဖြစ်ပါက ဤအဆင့်ကို ကျော်သွားနိုင်သည်။
Global git config လုပ်ဖို့အတွက် username နဲ့ email နေရာမှာ မိမိ၏ data ကိုထည့်ပြီး terminal ထဲမှာ အောက်ပါ command run လိုက်ပါမယ်

```
git config --global user.name "Your Username"
git config --global user.email youremail@mail.com
```

> Git Config သည် PC တွင် configuration values များသတ်မှတ်ရန်သာဖြစ်ပြီး Git Account Login Process မဖြစ်သေးပါ။ Git remote နှင့်သက်ဆိုင်သော command များ run မှသာ browser မှတဆင့် login ဝင်ရန် login link ရလာမည်ဖြစ်သည်

## Git

Git ဆိုတာက File (or) Code Changes တွေကို tracking လုပ်ပေးပြီးတော့ user တွေကနေ မတူညီတဲ့ code versions တွေကို သိမ်းထားဖို့ ၊ ပြန်လည်အသုံးချဖို့အပြင် တခြားသော လုပ်ဆောင်ချက်တွေကို ‌ဆောင်ရွက်ပေးနိုင်တဲ့ tool တစ်ခုဖြစ်တယ်

## Initializing

Git ကိုအသုံးပြုရန်အတွက် အသုံးပြုလိုတဲ့ project folder ထဲမှာ Git Repository _(Repo)_ တစ်ခုအရင်ဆောက်ရပါမယ်။
Git repo ဆောက်ဖို့ project folder ရဲ့ path ကို terminal မှာဖွင့်ပြီး အောက်ပါ command run ရပါမယ်

```
git init
```

command run ပြီးသွားရင် ‌project file ထဲမှာ `.git` ဆိုတဲ့ folder လေး‌ပေါ်လာမှာဖြစ်ပြီး ထို folder လေးပေါ်လာပြီးရင်တော့ git ကို စတင်အသုံးပြုလို့ရပြီပဲဖြစ်ပါတယ်

![Dot Git Folder](/images/blogs/git-basic/dot-git-folder.png)

> `npx create-react-app`, `laravel new` အစရှိတဲ့ Framework ‌Create တဲ့ command တွေနဲ့ ဆောက်ထားတဲ့ project တွေမှာတော့ `.git` folder တစ်ပါတည်းပါရှိမှာပဲဖြစ်တယ်

`.git` ဟာ git repo အတွက်သက်ဆိုင်တဲ့ code history နဲ့ information data တွေကို သိမ်းဆည်းထားပေးတဲ့ folder တစ်ခုဖြစ်တယ်

code history တွေနှင့် information data အားလုံးကို Git repo တွင် သိမ်းဆည်းထားသော်လည်း working directory မှာတော့ လက်ရှိ **branch** နဲ့ **commit** _(နောက်ပိုင်းတွင်ဆက်ရှင်းမည်)_ မှ code များကိုသာ ပြသနေမည်ဖြစ်သည်

![Repo and Working Dir](/images/blogs/git-basic/repo-wd.png)

## Committing

Git မှာ Code တွေကို version အလိုက် သိမ်းဆည်းခြင်းကို commit လုပ်တယ်/ commit တင်တယ်လို့ သုံးနှုန်းပါတယ်

![Git Commits](/images/blogs/git-basic/git-commits.png)

Commit လုပ်ထားတဲ့ data တွေကို git repo ထဲမှာသိမ်းဆည်းပေးထားပြီး လိုအပ်ပါကလည်း အရင် version node(commit) များကို ပြန်လည်အသုံးပြုနိုင်ပါတယ်

Git commit လုပ်ရန်အတွက် အရင်ဆုံး ‌ commit တင်လိုတဲ့ file တွေကို Staging Area ထဲထည့်‌ရပါမယ်

![Repo, Staging and Working Dir](/images/blogs/git-basic/repo-staging-wd.png)

> Staging Area ဆိုတာက Commit တင်ဖို့ရည်ရွယ်ထားတဲ့ Files တွေကို list အနေနဲ့ယူထားပေးတဲ့ နေရာတစ်ခုဖြစ်ပါတယ်

> Commit တင်မယ့် file တွေကို Staging Area ထဲအရင်ထည့်ထားပြီးမှသာ commit တင်လို့ရမှာဖြစ်ပါတယ်

### Git Add

Staging Area ထဲသို့ file တွေထည့်ရန် အောက်ပါ command ကို run ရန်လိုအပ်ပါတယ်

Changes File တွေအကုန်ထည့်ရန်

```
git add .
```

လိုချင်တဲ့ File တွေကိုသာထည့်ရန်

```
git add <filenames>
```

Example :

```
git add index.html

git add index.html hello.html
```

![Git Add](/images/blogs/git-basic/git-add-command.png)

### Git Status

Staging Area ထဲတွင် ဘယ် file တွေရှိနေလဲဆိုတာကို အောက်ပါ command သုံးပြီးကြည့်နိုင်သလို GUI Tool များဖြစ်တဲ့ [Sourcetree](https://www.sourcetreeapp.com/) , [tortoise](https://tortoisegit.org/) မျာအပြင် VS Code မှာ build in ပါတဲ့ Source Control Panel မှာလည်းကြည့်နိုင်ပါတယ်

```
git status
```

![Git Staging in VS Code](/images/blogs/git-basic/git-staging-vscode.png)

### Git Commit

အခုဆိုရင် သိမ်းထားချင်တဲ့ file တွေ staging area ထဲထည့်ပြီးပြီဆိုတော့ အောက်ပါ command run ပြီး commit တင်လို့ရပါပြီ

```
git commit -m "Your commit message"
```

![Git Commit Command](/images/blogs/git-basic/git-commit-command.png)

တင်ထားတဲ့ commit တွေကို အောက်ပါ command run ပြီး ကြည့်နိုင်သလို GUI tool တွေကနေတဆင့်လည်း ကြည့်ရှုနိုင်ပါတယ်

```
git log
```

## Branching

Git မှာ Branch ဆိုတာက project အတွက် parallel universe တွေလိုမျိုးဖြစ်တယ်။
ဆိုလိုတာက Branch တစ်ခုစီက ကိုယ်ပိုင် timeline / code base တွေနဲ့သွားနေကြတာဖြစ်တယ်

![Git Branches](/images/blogs/git-basic/git-branches.png)

Branch တွေကိုသုံးချင်းအားဖြင့် main branch မှာရှိနေတဲ့ code ကို ထိစရာမလိုတော့ဘဲ features အသစ် (သို့မဟုတ်) bug fix တာတွေကို branch သပ်သပ်ခွဲပြီး လုပ်ဆောင်နိုင်စေတယ်။ User တွေအနေနဲ့ Branch တွေ အသစ် create တာ, branch တစ်ခုမှ တစ်ခု switch လုပ်တာနဲ့ branch နှစ်ခုပေါင်းစည်းတာတွေကို လုပ်ဆောင်လို့ရတယ်

> Git init လုပ်ပြီးရင် Default အနေနဲ့ master/main branch ကပါဝင်ပြီးသားဖြစ်တယ်

### Git Branch

Git Branch အသစ်ကို အောက်က command run ပြီး create လို့ရတယ်

```
git branch <branch_name>
```

For Example :

```
git branch develop

git branch feature/add-home-page

git branch bug-fix
```

> Branch အသစ် Create လိုက်ရင် သူ့ရဲ့ code base ‌အနေနဲ့ လက်ရှိရောက်နေတဲ့ branch ရဲ့ commit က code တွေပါလာမှာပဲဖြစ်တယ်

Create ထားတဲ့ Branch List တွေကို ပြန်ကြည့်လိုပါက အောက်ပါ command run ပြီးကြည့်လို့ရနိုင်တယ်

```
git branch
```

### Git Checkout

Create ထားတဲ့ Branch ကိုသွားလိုပါက အောက်ပါ command run ပြီး switch လုပ်လို့ရတယ်

```
git checkout <branch_name>
```

အကယ်၍ branch ကို create+switch တစ်ခါတည်းလုပ်ချင်တယ်ဆိုရင် အောက်ပါ command run ပြီး လုပ်လို့ရမယ်

```
git checkout -b <branch_name>
```

ဒီနေရာမှာ `-b` က branch အသစ် create မယ်ဆိုတဲ့ command ဖြစ်တယ်

### Git Merge

Create ထားထဲ branch နှစ်ခုကိုပေါင်းချင်ရင် လက်ခံလိုတဲ့ branch ကို switch လုပ်ထားပြီး အောက်ပါ command run ရမှာပဲဖြစ်ပါတယ်။ `<branch_name>` နေရာမှာတော့ လာရောက်ပေါင်းစေလိုတဲ့ branch ရဲ့ name ရိုက်ပေးရမှာပဲ ဖြစ်ပါတယ်

```
git merge <branch_name>
```

![Git Merge](/images/blogs/git-basic/git-merge.png)

## Remote Repository

Remote repo ဆိုတာက Project မှာပါဝင်တဲ့ developer တွေရဲ့ code changes တွေကို ဘုံသိမ်းဆည်းပေးနိုင်ဖို့အတွက် အသုံးပြုတဲ့ Centralized Repo တစ်ခုဖြစ်တယ်။
Remote Repo တွေကို ပုံမှန်အားဖြင့် GitHub, GitLab, Bitbucket ကဲ့သို့သော git server ပေါ်များတွင် သိမ်းဆည်းကြသည်။

![Git Repos](/images/blogs/git-basic/git-repos.png)

> Beginner တွေအနေနဲ့ Git နဲ့ GitHub ကိုအတူတူလို့ မှားတတ်ကြပါတယ်

> အကြမ်းဖျဉ်းအားဖြင့် git က tool တစ်ခုဖြစ်ပြီးတော့ GitHub က git သုံးထားတဲ့ project ကို အခြားသူတွေနဲ့ အတူတူလုပ်နိုင်ဖို့ cloud ပေါ်တင်ထားတဲ့ repo တစ်ခုဖြစ်ပါတယ်

### Create GitHub Repo

GitHub ထဲမှာ Repository တစ်ခုကို ဒီ [link](https://github.com/new) မှာသွားပြီး create ပါမယ်
GitHub Repo အသစ်တစ်ခု ဆောက်ပြီးသားဖြစ်ပါက ဤအဆင့်ကို ကျော်သွားနိုင်သည်။

Repo ကိုနှစ်သက်ရာ Name တစ်ခုပေးပါမယ်။ ပြီးရင် `Create Repository` ခလုပ်ကိုနှိပ်ပြီး ခဏစောင့်လိုက်ပါက GitHub Repo အသစ်တစ်ခုရလာမှာပဲဖြစ်ပါတယ်

![GitHub Create Repo](/images/blogs/git-basic/create-github-repo.png)

ရရှိလာတဲ့ GitHub Repo ရဲ့ Link ကိုတော့ URL bar မှကူးယူခြင်းဖြင့်၎င်း GitHub ရဲ့ Quick setup Session ကူးယူခြင်းဖြင့်၎င်း ရယူနိုင်ပါတယ်

![Get GitHub Repo Link](/images/blogs/git-basic/get-github-repo-link.png)

### Git Remote

Remote Repo(GitHub) တစ်ခုရှိထားပြီဆိုတော့ local project ရဲ့ terminalမှာ အောက်ပါ command အတိုင်း run လိုက်ပါက local repo နဲ့ remote repo နဲ့ ချိတ်ဆက်သွားမှာဖြစ်ပါတယ်

```
git remote add <name> <url>
```

> `<name>` မှာ နှစ်သက်ရာထည့်လို့ရပေမယ့် များသောအားဖြင့် `origin` ကိုပဲ အသုံးပြုကြပါတယ်

For example :

```
git remote add origin https://github.com/dev-zha/my-project
```

> ချိတ်ဆက်မယ့် Repo ဟာ Public ဖြစ်ရမယ် ဒါမှမဟုတ် Private ဆိုပါက ကိုယ်ပိုင် git account က repo ဖြစ်ရမယ်။ တခြားသူ၏ Private Repo ဆိုပါက ထို repo တွင် Collaborator အနေနဲ့ပါဝင်နေဖို့လိုအပ်တယ်

ချိတ်ဆက်ထားတဲ့ remote repo ကို အောက်ပါ command run ပြီးကြည့်ရှုနိုင်ပါတယ်

```
git remote show <name>
```

remote ချိတ်ထားပြန်ဖြုတ်လိုပါက အောက်ပါ command run ပြီး remove လုပ်နိုင်ပါတယ်

```
git remote remove <name>
```

### Git Push

`git push` command ကို user မှ changes ပြုလုပ်ထားတဲ့ local commits များကို remote repo သို့ ပေးပို့ကာ update လုပ်ရန်အတွက် အသုံးပြုပါသည်။ command အနေနဲ့ :

```
git push <remote-name> <branch-name>
```

Example:

```
git push origin main
```

> PC တွင် GitHub Account Login မဖြစ်သေးပါက `git push` command ကို run လိုက်တဲ့အခါ Github Account ကို PC နဲ့ချိတ်ဖို့အတွက်ရန် browser မှာ login ဝင်ရန် link ပေါ်လာမှာဖြစ်သည်

### Git Fetch

`git fetch` command ကို current branch အတွက် remote repo ပေါ်မှ code changes များကို ရယူရန်အသုံးပြုသည်။
code changes များကိုရယူရာတွင် local code နှင့် ‌auto merge ခြင်းမပြုဘဲ user မှ merge လုပ်ရန် command မ run မှီအထိ local repo ထဲ၌ သီးခြားသိမ်းဆည်းထားပေးသည်။ command အနေနှင့် :

```
git fetch <remote-name> <branch-name>
```

For example:

```
git fetch origin main
```

### Git Pull

`git pull` command ကို remote repo မှ code changes များကို ရယူရန်နှင့် ရရှိလာသော code များကို လက်ရှိ local branch ထဲသို့ တခါတည်း auto merge လုပ်ရန် အသုံးပြုသည်။
`git pull` သည် `git fetch` နှင့် `git merge` command နှစ်ခုကို ပေါင်းစပ်ထားခြင်းဖြစ်သည်။ command အနေနှင့် :

```
git pull <remote-name> <branch-name>
```

For example:

```
git pull origin main
```

### Git Clone

`git clone` command ကို local machine ထဲတွင် remote repo ၏ copy repo တစ်ခုအနေနှင့် ဖန်တီးရန် အသုံးပြုသည်။

```
git clone <repository-url>
```

For example:

```
git clone https://github.com/dev-zha/my-project
```

> `git clone` သည် project ကို စတင်သောအခါတွင် အသုံးပြုသည့် ပထမဆုံး command ဖြစ်ပြီး code changeများ ရယူခြင်း/uploadတင်ခြင်းတွေ လုပ်ဆောင်နိုင်ရန် local machine နှင့် remote repo တပါတည်းချိတ်ဆက်ပေးထားသည်

![Git Commands](/images/blogs/git-basic/git-commands.png)

## conclusion

Git အခြေခံများကို နားလည်ခြင်းအားဖြင့် သင့်ရဲ့ team collaboration နှင့် code management များအတွက် ပိုမိုအဆင်ပြေစေမယ်လို့ မျှော်လင့်ပါသည်။
