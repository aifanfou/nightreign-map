const fs = require('fs');
const path = require('path');

async function generateUserCount() {
  // 这里可以获取真实数据（例如从数据库、第三方 API）
  // 为了演示，我们返回一个模拟值
  const data = {
    count: 42, // 你可以替换成任何获取逻辑
    lastUpdated: new Date().toISOString()
  };
  
  // 确保 out/api 目录存在（构建产物目录）
  const outDir = path.join(process.cwd(), 'out', 'api');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }
  
  // 写入 user-count.json
  fs.writeFileSync(
    path.join(outDir, 'user-count.json'),
    JSON.stringify(data, null, 2)
  );
  
  console.log('✅ Generated static API: out/api/user-count.json');
}

generateUserCount().catch(console.error);
