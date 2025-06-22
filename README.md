# ypython

YPython是一个强大的Python项目，提供丰富的功能和简洁的API。

## 项目文档

本项目使用VuePress构建文档，采用vuepress-theme-hope最新版主题。

### 环境要求

- Node.js 16+ 
- pnpm 8+

### 安装依赖

```bash
# 安装pnpm（如果未安装）
npm install -g pnpm

# 安装项目依赖
pnpm install
```

### 开发模式

```bash
# 启动开发服务器
pnpm dev
```

访问 http://localhost:8080 查看文档。

### 构建生产版本

```bash
# 构建静态文件
pnpm build
```

构建后的文件位于 `docs/.vuepress/dist/` 目录。

### 清理缓存

```bash
# 清理构建缓存
pnpm clean
```

## 项目结构

```
ypython/
├── docs/                    # 文档目录
│   ├── .vuepress/          # VuePress配置
│   │   └── config.ts       # 主配置文件
│   ├── guide/              # 指南文档
│   ├── api/                # API文档
│   ├── examples/           # 示例文档
│   └── README.md           # 首页
├── package.json            # 项目配置
├── .npmrc                  # npm配置
├── .gitignore             # Git忽略文件
└── README.md              # 项目说明
```

## 特性

- 🚀 **高性能**: 优化的算法实现
- 🔧 **易扩展**: 模块化设计，易于扩展
- 📚 **文档完善**: 详细的API文档和示例
- 🛡️ **类型安全**: 完整的类型注解支持
- 🌍 **国际化**: 支持多语言

## 贡献

欢迎贡献代码！请查看我们的[贡献指南](docs/guide/contributing.md)。

## 许可证

本项目采用 [MIT 许可证](LICENSE)。
