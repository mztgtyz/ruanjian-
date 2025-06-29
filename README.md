# AI图像生成器

一个功能强大的AI图像生成软件，基于Next.js和React构建，提供现代化的用户界面和多种AI图像处理功能。

## 🚀 功能特性

### 1. 文本到图像生成
- 支持多种AI模型（DALL-E 3、DALL-E 2、Midjourney）
- 可调节图像尺寸、质量和风格
- 实时生成预览
- 批量下载功能

### 2. 风格转换
- 支持多种艺术风格（复古、油画、水彩、素描、卡通、赛博朋克）
- 拖拽上传图片
- 前后对比预览
- 一键下载转换结果

### 3. 图像编辑
- 基础图像编辑功能
- 实时预览效果
- 编辑历史记录
- 支持多种图片格式

### 4. 作品画廊
- 展示AI生成的作品
- 分类浏览和搜索
- 点赞和分享功能
- 作品下载

## 🛠️ 技术栈

- **前端框架**: Next.js 14 + React 18
- **样式**: Tailwind CSS
- **图标**: Lucide React
- **文件上传**: React Dropzone
- **通知**: React Hot Toast
- **动画**: Framer Motion
- **语言**: TypeScript

## 📦 安装和运行

### 前置要求
- Node.js 18+ 
- npm 或 yarn

### 安装依赖
```bash
npm install
# 或
yarn install
```

### 开发模式运行
```bash
npm run dev
# 或
yarn dev
```

### 构建生产版本
```bash
npm run build
# 或
yarn build
```

### 启动生产服务器
```bash
npm start
# 或
yarn start
```

## 🎨 界面预览

应用包含四个主要功能模块：

1. **文本生图**: 输入描述文本，选择AI模型和参数，生成高质量图像
2. **风格转换**: 上传图片，选择艺术风格，获得风格化效果
3. **图像编辑**: 基础图像编辑和滤镜功能
4. **作品画廊**: 浏览、搜索和下载AI生成的作品

## 🔧 配置说明

### 环境变量
创建 `.env.local` 文件并添加以下配置：

```env
# AI API配置（可选）
OPENAI_API_KEY=your_openai_api_key
STABILITY_API_KEY=your_stability_api_key

# 应用配置
NEXT_PUBLIC_APP_NAME=AI图像生成器
NEXT_PUBLIC_APP_DESCRIPTION=智能创作，无限可能
```

### 自定义样式
项目使用Tailwind CSS，可以在 `tailwind.config.js` 中自定义主题：

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          // 自定义主色调
        }
      }
    }
  }
}
```

## 📁 项目结构

```
ai-image-generator/
├── app/                    # Next.js App Router
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   └── page.tsx           # 主页面
├── components/            # React组件
│   ├── Header.tsx         # 页面头部
│   ├── ImageGenerator.tsx # 图像生成器
│   ├── StyleTransfer.tsx  # 风格转换
│   ├── ImageEditor.tsx    # 图像编辑
│   └── Gallery.tsx        # 作品画廊
├── public/                # 静态资源
├── package.json           # 项目配置
├── tailwind.config.js     # Tailwind配置
├── tsconfig.json          # TypeScript配置
└── README.md              # 项目说明
```

## 🎯 使用指南

### 生成图像
1. 在"文本生图"标签页输入描述文本
2. 选择AI模型和参数设置
3. 点击"生成图像"按钮
4. 等待生成完成后下载结果

### 风格转换
1. 在"风格转换"标签页上传图片
2. 选择想要的艺术风格
3. 点击"开始转换"
4. 查看前后对比并下载结果

### 浏览画廊
1. 在"作品画廊"标签页浏览作品
2. 使用搜索和分类筛选
3. 点赞喜欢的作品
4. 下载或分享作品

## 🤝 贡献指南

欢迎提交Issue和Pull Request来改进这个项目！

### 开发流程
1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- [Next.js](https://nextjs.org/) - React框架
- [Tailwind CSS](https://tailwindcss.com/) - CSS框架
- [Lucide](https://lucide.dev/) - 图标库
- [React Dropzone](https://react-dropzone.js.org/) - 文件上传
- [React Hot Toast](https://react-hot-toast.com/) - 通知组件

## 📞 联系方式

如有问题或建议，请通过以下方式联系：

- 提交 [Issue](https://github.com/your-username/ai-image-generator/issues)
- 发送邮件至: your-email@example.com

---

**注意**: 这是一个演示项目，AI图像生成功能使用模拟数据。在实际使用中，需要集成真实的AI API服务。 