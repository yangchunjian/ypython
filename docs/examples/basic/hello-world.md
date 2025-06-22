# Hello World 示例

这是YPython最简单的使用示例。

## 代码示例

```python
import ypython

# 创建YPython实例
yp = ypython.YPython()

# 简单的文本处理
text = "Hello, World!"
result = yp.process(text)

print(result)  # 输出: Hello, World!
```

## 运行步骤

1. 确保已安装YPython：
   ```bash
   pip install ypython
   ```

2. 创建Python文件 `hello_world.py`：
   ```python
   import ypython
   
   def main():
       yp = ypython.YPython()
       result = yp.process("Hello, World!")
       print(result)
   
   if __name__ == "__main__":
       main()
   ```

3. 运行程序：
   ```bash
   python hello_world.py
   ```

## 预期输出

```
Hello, World!
```

## 说明

这个示例展示了YPython的基本用法：

- 导入YPython模块
- 创建YPython实例
- 调用process方法处理文本
- 输出结果

## 下一步

- 查看[配置管理](./config.md)示例
- 学习[错误处理](./error-handling.md)
- 探索更多[数据处理示例](../data/) 