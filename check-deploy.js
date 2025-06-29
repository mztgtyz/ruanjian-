const fs = require('fs');
const path = require('path');

console.log('🔍 检查部署配置...\n');

// 检查必要文件
const requiredFiles = [
  'package.json',
  'next.config.js',
  'app/layout.tsx',
  'app/page.tsx',
  'components/Header.tsx',
  'components/ImageGenerator.tsx',
  'components/StyleTransfer.tsx',
  'components/ImageEditor.tsx',
  'components/Gallery.tsx'
];

let allGood = true;

requiredFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ ${file} - 缺失`);
    allGood = false;
  }
});

// 检查package.json
try {
  const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  if (pkg.scripts && pkg.scripts.build) {
    console.log('✅ package.json 配置正确');
  } else {
    console.log('❌ package.json 缺少build脚本');
    allGood = false;
  }
} catch (e) {
  console.log('❌ package.json 格式错误');
  allGood = false;
}

console.log('\n📋 部署建议:');
if (allGood) {
  console.log('✅ 项目配置完整，可以开始部署');
  console.log('🚀 推荐使用 Vercel 进行部署');
  console.log('🌐 访问 https://vercel.com 开始部署');
} else {
  console.log('❌ 请先修复上述问题再部署');
}

console.log('\n📖 部署文档:');
console.log('- Vercel: https://vercel.com/docs');
console.log('- Netlify: https://docs.netlify.com');
console.log('- GitHub Pages: https://pages.github.com'); 