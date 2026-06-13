# ============ 第一阶段：构建 ============
FROM node:20-alpine AS builder
WORKDIR /app

# 复制依赖文件
COPY package.json package-lock.json* ./

# 安装依赖（构建需要 devDependencies，如 @next/bundle-analyzer）
RUN npm ci && npm cache clean --force

# 复制源码
COPY . .

# 构建 Next.js (standalone 模式)
RUN npm run build

# ============ 第二阶段：运行 ============
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# 创建非 root 用户
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# 只复制 standalone 构建产物
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]