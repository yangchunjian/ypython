# API 参考

YPython的完整API参考文档。

## 核心模块

- [YPython](./ypython.md) - 主类
- [配置](./config.md) - 配置相关
- [工具函数](./utils.md) - 实用工具函数

## 数据处理模块

- [数据加载](./data/loader.md) - 数据加载器
- [数据转换](./data/transformer.md) - 数据转换器
- [数据验证](./data/validator.md) - 数据验证器

## 机器学习模块

- [模型](./ml/model.md) - 机器学习模型
- [训练器](./ml/trainer.md) - 模型训练器
- [评估器](./ml/evaluator.md) - 模型评估器

## Web模块

- [服务器](./web/server.md) - Web服务器
- [路由](./web/router.md) - 路由管理
- [中间件](./web/middleware.md) - 中间件

## 类型定义

- [类型](./types.md) - 类型定义和注解

## 错误处理

- [异常](./exceptions.md) - 异常类定义

## 版本兼容性

本API文档适用于YPython 1.0.0及以上版本。

## 使用示例

```python
import ypython
from ypython.config import Config
from ypython.utils import helper_function

# 创建配置
config = Config(debug=True)

# 创建主实例
yp = ypython.YPython(config=config)

# 使用工具函数
result = helper_function("test")
```

## 贡献

如果您发现API文档中的错误或有改进建议，请提交Issue或Pull Request。 