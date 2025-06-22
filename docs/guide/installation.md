# 安装

本章将介绍如何安装YPython。

## 系统要求

- Python 3.8 或更高版本
- pip 包管理器

## 安装方法

### 使用pip安装（推荐）

```bash
pip install ypython
```

### 从源码安装

如果您想安装最新版本或自定义版本，可以从GitHub克隆源码：

```bash
git clone https://github.com/your-username/ypython.git
cd ypython
pip install -e .
```

### 使用conda安装

```bash
conda install -c conda-forge ypython
```

## 验证安装

安装完成后，您可以通过以下方式验证安装是否成功：

```python
import ypython
print(ypython.__version__)
```

如果输出版本号，说明安装成功。

## 可选依赖

YPython有一些可选依赖，用于增强特定功能：

```bash
# 安装所有可选依赖
pip install ypython[all]

# 安装特定功能依赖
pip install ypython[data]      # 数据处理功能
pip install ypython[ml]        # 机器学习功能
pip install ypython[web]       # Web功能
```

## 升级

要升级到最新版本：

```bash
pip install --upgrade ypython
```

## 卸载

如果需要卸载YPython：

```bash
pip uninstall ypython
```

## 常见问题

### 安装失败

如果安装过程中遇到问题，请尝试：

1. 升级pip：`pip install --upgrade pip`
2. 使用虚拟环境
3. 检查Python版本是否符合要求

### 依赖冲突

如果遇到依赖冲突，建议使用虚拟环境：

```bash
python -m venv ypython-env
source ypython-env/bin/activate  # Linux/Mac
# 或
ypython-env\Scripts\activate     # Windows
pip install ypython
```

## 下一步

安装完成后，请查看[快速开始](./getting-started.md)指南。 