# Java

Java 是一种跨平台的面向对象编程语言，由 Sun Microsystems 于 1995 年发布。

## Java 核心特性

### 面向对象编程
Java 是纯粹的面向对象编程语言，支持封装、继承和多态。

```java
// 基本类定义
public class Person {
    private String name;
    private int age;
    
    // 构造方法
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    // 方法
    public String greet() {
        return "Hello, " + name + "!";
    }
    
    //  getter 和 setter 方法
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public int getAge() {
        return age;
    }
    
    public void setAge(int age) {
        this.age = age;
    }
}

// 使用
public class Main {
    public static void main(String[] args) {
        Person person = new Person("张三", 30);
        System.out.println(person.greet()); // 输出: Hello, 张三!
    }
}
```

### 平台无关性
Java 代码编译为字节码，可以在任何支持 Java 虚拟机 (JVM) 的平台上运行。

### 内存管理
Java 使用自动内存管理，通过垃圾回收器回收不再使用的对象。

### 多线程支持
Java 内置了多线程支持，简化了并发编程。

## 学习资源

- [Java 官方文档](https://docs.oracle.com/en/java/)
- [Java 教程](https://docs.oracle.com/javase/tutorial/)
- [Java 实战](https://www.oreilly.com/library/view/effective-java/9780134686097/)
