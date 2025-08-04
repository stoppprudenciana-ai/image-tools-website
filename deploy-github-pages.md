# GitHub Pages 部署指南

## 步骤1：创建GitHub仓库

1. 登录 [GitHub](https://github.com)
2. 点击右上角的 "+" 号，选择 "New repository"
3. 仓库名称填写：`image-tools-website`
4. 选择 "Public"（公开）
5. 不要勾选 "Add a README file"
6. 点击 "Create repository"

## 步骤2：上传项目文件

### 方法A：使用Git命令行
```bash
# 在项目目录下执行
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/你的用户名/image-tools-website.git
git push -u origin main
```

### 方法B：使用GitHub Desktop
1. 下载并安装 [GitHub Desktop](https://desktop.github.com/)
2. 登录GitHub账号
3. 选择 "Clone a repository from the Internet"
4. 选择刚创建的仓库
5. 将项目文件复制到仓库文件夹
6. 提交并推送

## 步骤3：启用GitHub Pages

1. 在GitHub仓库页面，点击 "Settings"
2. 左侧菜单找到 "Pages"
3. Source选择 "Deploy from a branch"
4. Branch选择 "main"，文件夹选择 "/ (root)"
5. 点击 "Save"
6. 等待几分钟，GitHub会自动部署

## 步骤4：获取访问链接

部署完成后，您会得到一个类似这样的链接：
```
https://你的用户名.github.io/image-tools-website/
```

## 分享给朋友

将链接发送给朋友，他们就可以在手机上直接访问使用了！

---

## 优势
- ✅ 完全免费
- ✅ 自动HTTPS
- ✅ 全球CDN加速
- ✅ 手机端完美支持
- ✅ 无需服务器维护

## 注意事项
- 仓库必须是公开的（免费版）
- 首次部署可能需要等待5-10分钟
- 更新代码后会自动重新部署 