# 🖥️ GitHub Desktop 部署指南（最简单）

## 步骤1：下载GitHub Desktop
1. 访问 https://desktop.github.com/
2. 下载并安装GitHub Desktop
3. 使用GitHub账号登录

## 步骤2：创建仓库
1. 打开GitHub Desktop
2. 点击 "File" → "New repository"
3. 填写信息：
   - Name: `image-tools-website`
   - Description: `图文格式转换工具`
   - Local path: 选择项目文件夹位置
   - 勾选 "Public"
4. 点击 "Create repository"

## 步骤3：添加文件
1. 在GitHub Desktop中，点击 "Show in Explorer"
2. 将项目文件夹中的所有文件复制到这个文件夹
3. 回到GitHub Desktop，会看到所有文件
4. 在底部填写提交信息：`Initial commit`
5. 点击 "Commit to main"

## 步骤4：推送到GitHub
1. 点击 "Publish repository"
2. 确保勾选 "Keep this code private" 是未勾选的
3. 点击 "Publish repository"

## 步骤5：启用GitHub Pages
1. 在GitHub Desktop中，点击 "View on GitHub"
2. 在GitHub网页中，点击 "Settings"
3. 左侧菜单找到 "Pages"
4. Source选择 "Deploy from a branch"
5. Branch选择 "main"
6. 点击 "Save"

## 步骤6：获得链接
等待几分钟后，您会看到：
```
Your site is live at https://你的用户名.github.io/image-tools-website/
```

---

## 🆘 如果还是找不到Pages设置

### 替代方案：使用Netlify（更简单）

1. 访问 https://netlify.com
2. 注册账号
3. 将整个项目文件夹拖拽到Netlify页面
4. 等待部署完成
5. 获得访问链接

### 替代方案：使用Vercel（最快）

1. 访问 https://vercel.com
2. 注册账号
3. 将整个项目文件夹拖拽到Vercel页面
4. 等待部署完成
5. 获得访问链接

---

## 📱 测试链接

现在您可以在手机上测试：
- 电脑：http://localhost:8001
- 手机：http://192.168.1.10:8001

## 🎯 推荐方案

如果GitHub Pages设置复杂，建议使用：
1. **Netlify**：拖拽即可部署，最简单
2. **Vercel**：部署速度快，也很简单
3. **GitHub Desktop**：如果一定要用GitHub Pages

您想尝试哪种方案？ 