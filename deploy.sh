#!/bin/bash

# 构建项目
echo "构建项目..."
npm run build

# 创建部署目录
echo "创建部署目录..."
mkdir -p /var/www/ai-image-generator

# 复制构建文件
echo "复制文件..."
cp -r out/* /var/www/ai-image-generator/

# 设置权限
echo "设置权限..."
chmod -R 755 /var/www/ai-image-generator

echo "部署完成！"
echo "访问地址: http://your-domain.com" 