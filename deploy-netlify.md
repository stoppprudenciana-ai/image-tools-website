# Netlify 部署指南

## 步骤1：注册Netlify账号

1. 访问 [Netlify](https://netlify.com)
2. 点击 "Sign up"
3. 选择使用GitHub账号登录（推荐）

## 步骤2：部署网站

### 方法A：拖拽部署（最简单）
1. 登录Netlify后，将整个项目文件夹拖拽到Netlify的部署区域
2. 等待上传完成，Netlify会自动部署
3. 获得一个类似 `https://random-name.netlify.app` 的链接

### 方法B：连接GitHub仓库
1. 在Netlify点击 "New site from Git"
2. 选择 "GitHub"
3. 选择您的仓库
4. 部署设置：
   - Build command: 留空
   - Publish directory: 留空（根目录）
5. 点击 "Deploy site"

## 步骤3：自定义域名（可选）

1. 在Netlify站点设置中，点击 "Domain settings"
2. 点击 "Add custom domain"
3. 输入您想要的域名（需要先购买域名）

## 分享给朋友

将Netlify提供的链接发送给朋友即可！

---

## 优势
- ✅ 完全免费
- ✅ 自动HTTPS
- ✅ 全球CDN
- ✅ 手机端完美支持
- ✅ 支持自定义域名
- ✅ 自动部署（连接GitHub时）

## 注意事项
- 免费版每月有带宽限制（100GB）
- 对于图片处理工具来说完全够用 