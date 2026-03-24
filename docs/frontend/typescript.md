# TypeScript

TypeScript 是 JavaScript 的超集，为其添加了类型系统。它由 Microsoft 开发，于 2012 年首次发布。

## TypeScript 核心特性

### 类型系统
TypeScript 提供了静态类型检查，可以在编译时检测错误。

```typescript
// 基本类型
let name: string = '张三';
let age: number = 30;
let isStudent: boolean = true;

// 接口
interface Person {
  name: string;
  age: number;
  isStudent?: boolean; // 可选属性
}

// 函数类型
function greet(person: Person): string {
  return `Hello, ${person.name}!`;
}

// 使用
const person: Person = {
  name: '李四',
  age: 25
};

console.log(greet(person)); // 输出: Hello, 李四!
```

### 接口和类型别名
TypeScript 支持接口和类型别名，用于定义复杂类型。

### 泛型
泛型允许创建可复用的组件，支持多种类型。

### 装饰器
TypeScript 支持装饰器，用于在运行时修改类和类方法的行为。

## 学习资源

- [TypeScript 官方文档](https://www.typescriptlang.org/)
- [TypeScript 中文手册](https://www.tslang.cn/)
- [TypeScript 实战教程](https://ts.xcatliu.com/)
