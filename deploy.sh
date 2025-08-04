#!/bin/bash

# 图文格式转换工具 - 快速部署脚本

echo "🚀 图文格式转换工具 - 快速部署"
echo "=================================="

# 检查是否安装了git
if ! command -v git &> /dev/null; then
    echo "❌ 错误：未安装Git，请先安装Git"
    echo "下载地址：https://git-scm.com/"
    exit 1
fi

# 检查是否在项目根目录
if [ ! -f "index.html" ]; then
    echo "❌ 错误：请在项目根目录运行此脚本"
    exit 1
fi

echo "📁 当前目录：$(pwd)"
echo "📋 项目文件检查..."

# 检查必要文件
required_files=("index.html" "pages/image-watermark.html" "css/image-watermark.css" "js/image-watermark.js")
for file in "${required_files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file"
    else
        echo "❌ 缺少文件：$file"
        exit 1
    fi
done

echo ""
echo "🎯 选择部署方式："
echo "1. GitHub Pages (推荐)"
echo "2. Netlify (拖拽部署)"
echo "3. Vercel (拖拽部署)"
echo "4. 本地测试"
echo ""

read -p "请输入选择 (1-4): " choice

case $choice in
    1)
        echo ""
        echo "📚 GitHub Pages 部署指南"
        echo "========================"
        echo ""
        echo "1. 访问 https://github.com 并登录"
        echo "2. 点击右上角 '+' 号，选择 'New repository'"
        echo "3. 仓库名称填写：image-tools-website"
        echo "4. 选择 'Public'，不要勾选 'Add a README file'"
        echo "5. 点击 'Create repository'"
        echo ""
        echo "6. 在终端中运行以下命令："
        echo "   git init"
        echo "   git add ."
        echo "   git commit -m 'Initial commit'"
        echo "   git branch -M main"
        echo "   git remote add origin https://github.com/你的用户名/image-tools-website.git"
        echo "   git push -u origin main"
        echo ""
        echo "7. 在GitHub仓库页面，点击 'Settings' -> 'Pages'"
        echo "8. Source选择 'Deploy from a branch'，Branch选择 'main'"
        echo "9. 等待几分钟后获得访问链接"
        echo ""
        echo "🔗 部署完成后，您会得到类似这样的链接："
        echo "   https://你的用户名.github.io/image-tools-website/"
        ;;
    2)
        echo ""
        echo "🌐 Netlify 部署指南"
        echo "==================="
        echo ""
        echo "1. 访问 https://netlify.com 并注册账号"
        echo "2. 登录后，将整个项目文件夹拖拽到Netlify的部署区域"
        echo "3. 等待上传完成，获得访问链接"
        echo ""
        echo "🔗 您会得到类似这样的链接："
        echo "   https://random-name.netlify.app"
        ;;
    3)
        echo ""
        echo "⚡ Vercel 部署指南"
        echo "=================="
        echo ""
        echo "1. 访问 https://vercel.com 并注册账号"
        echo "2. 登录后，将整个项目文件夹拖拽到Vercel的部署区域"
        echo "3. 等待部署完成，获得访问链接"
        echo ""
        echo "🔗 您会得到类似这样的链接："
        echo "   https://your-project-name.vercel.app"
        ;;
    4)
        echo ""
        echo "🔧 本地测试"
        echo "=========="
        echo ""
        echo "启动本地服务器..."
        
        # 检查Python3
        if command -v python3 &> /dev/null; then
            echo "🚀 启动本地服务器 (Python3)..."
            echo "📱 手机访问：http://$(hostname -I | awk '{print $1}'):8000"
            echo "💻 电脑访问：http://localhost:8000"
            echo ""
            echo "按 Ctrl+C 停止服务器"
            python3 -m http.server 8000
        elif command -v python &> /dev/null; then
            echo "🚀 启动本地服务器 (Python)..."
            echo "📱 手机访问：http://$(hostname -I | awk '{print $1}'):8000"
            echo "💻 电脑访问：http://localhost:8000"
            echo ""
            echo "按 Ctrl+C 停止服务器"
            python -m http.server 8000
        else
            echo "❌ 错误：未安装Python，无法启动本地服务器"
            echo "请安装Python或使用其他部署方式"
        fi
        ;;
    *)
        echo "❌ 无效选择，请重新运行脚本"
        exit 1
        ;;
esac

echo ""
echo "📱 手机端使用提示："
echo "=================="
echo "• 确保手机和电脑在同一WiFi网络下"
echo "• 手机浏览器访问上述链接"
echo "• 支持拖拽上传图片"
echo "• 支持所有现代浏览器"
echo ""
echo "�� 部署完成后，将链接分享给朋友即可！" 