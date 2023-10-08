https://juejin.cn/post/7254353613743882296

简单整理一下JDK9-JDK17在开发中可能常用到的一些新功能

## JDK 8

### Optional 的妙用

#### ofNullable()、orElse()、orElseThrow()

```java
public static <T> Optional<T> ofNullable(T value) {    
    return value == null ? empty() : of(value);    
}
```

```java
CbimUser.builder()
.sex(Optional.ofNullable(user.getSex()).orElse(0))
  
.sex(user.getSex()==null?0:user.getSex())
.build()
```

```java
    public CodeNote getNoteById(String id) {
        return Optional.ofNullable(noteMapper.selectById(id))
                .orElseThrow(() -> new CustomException("数据不存在"));
    }
```

```java
User user = null;
user = Optional.ofNullable(user).orElseGet(() -> createUser());
user = Optional.ofNullable(user).orElse(createUser());

public static User createUser(){
        System.out.println("createUser...");
        User user = new User();
        user.setName("hangman");
        return user;
}

// createUser...
// createUser...
```

当`user`值不为`null`时，`orElse`函数依然会执行`createUser()`方法，而`orElseGet`函数并不会执行`createUser()`方法。

#### map()、flatMap()

```java
String city = Optional.ofNullable(user).map(u-> u.getName()).get();
// java.util.NoSuchElementException: No value present
Optional.ofNullable(user)    
                   .map(u-> u.getAddress())    
                   .map(a->a.getCity())    
                   .orElseThrow(()->new Exception("取指错误"));    
// java.lang.Exception: 取指错误
```

#### ifPresent()

```java
Optional.ofNullable(user)    
    .ifPresent(u->{    
        dosomething(u);    
});   
```

#### filter()

`filter`方法接受一个 `Predicate` 来对 `Optional` 中包含的值进行过滤。

如果包含的值满足条件，那么还是返回这个 `Optional`。

否则返回 `Optional.empty`。

```java
public User getUser(User user) {    
    return Optional.ofNullable(user)    
                   .filter(u->"zhangsan".equals(u.getName()))    
                   .orElseGet(()-> {    
                        User user1 = new User();    
                        user1.setName("zhangsan");    
                        return user1;    
                   });    
}    
```

## JDK 9





