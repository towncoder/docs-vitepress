# Hutool

先介绍一下这个工具类集合，记得刚开始学编程时写代码还要复制一堆工具类进来，后来用上Hutool，那叫一个爽。

简单来说就是一堆造好的轮子，引入pom就可以用。比如日期转换、id生成等等很多。

```xml
				<dependency>
            <groupId>cn.hutool</groupId>
            <artifactId>hutool-all</artifactId>
            <version>5.7.16</version>
        </dependency>
```



# 加密

大家在工作中一定要注意敏感数据的加密存储和脱敏输出。比如用户的身份证信息、登录密码等。

正好最近有个需求要保存数据库连接密码，毫无疑问，需要加密存储。

那今天就介绍一下几种加密方式的选择和使用。

## 摘要加密

首先介绍摘要加密，比较简单的一种。常用的就是MD5。

这种算法的特点是：无论用户输入多么长度的原始数据，讲过计算后输出的密文都是固定长度的，这种算法的原理是根据一定的运算规则进行某种形式的提取，这种提取就是摘要，并且摘要的数据与元数据有密切联系。只要源数据稍有改变，输出的“摘要”便完全不同，因此，基于这种原理的额算法便能够对数据完整性提供健全的保证。

但是有个缺点，即消息摘要算法是不可逆的。理论上无法通过反向运算取得元数据内容。因此他通常值被用来做数据的完整性验证。

```java
/**
 *  md5的基本使用
 *      生成32位的密文
 */
@Test
public void MD5BasicTest() {
    System.out.println(new String(DigestUtil.md5("test")));
    // 返回16进制形式  de2ec3065687316991579e6b9e6ce143
    System.out.println(DigestUtil.md5Hex("test"));
}

```

md5的还有一些高级使用，比如加盐。

```java
/**
 *  
 *      加盐  加盐的位置  摘要次数
 */
@Test
public void MD5Test() {
    // 加盐  加盐的位置  摘要次数
    String salt = "md5Salt";
    int index = 0;
    int count = 2;
    MD5 md5 = new MD5(salt.getBytes(StandardCharsets.UTF_8), index, count);
    // 返回16进制格式
    System.out.println(md5.digestHex("test"));;
}

```

## 对称加密

我觉得这是简单又好用的一种，所谓“对称”就是说加密和解密用的都是相同的秘钥，也就是私钥。通过这个私钥，我们既可以加密，也可以解密。

在本次需求中我用的也是对称加密中的Des算法。

```java

/*** 对称加密*/@Slf4jpublic 
class DesUtil {
  private static final String KEY = "Mf1tZEDprp0=";

/** 根据KEY生成DES */

	private static DES des=SecureUtil.des(SecureUtil.generateKey(SymmetricAlgorithm.DES.getValue(),KEY.getBytes()).getEncoded()); 
  
/*** 获取加密后信息** @param plainText 明文* @return 加密后信息*/
public static String getEncryptData(String plainText) {
  return des.encryptHex(plainText);
}
/*** 获取解密后信息** @param cipherText 密文* @return 解密后信息*/
public static String getDecryptData(String cipherText) {
  return des.decryptStr(cipherText);
}
  // public static void main(String[] args) {// String str = "Libiao@123";// String EncryptStr = getEncryptData(str);// log.info("加密后数据为,EncryptStr:{}",EncryptStr);// log.info("解密后数据为,str:{}",getDecryptData(EncryptStr));// }}
```

## 非对称加密

非对称也好理解，就是有公钥还有私钥。最常用的就是RSA和DSA。

私钥自己拥有，公钥公开。根据应用的不同，我们可以选择使用不同的秘钥进行加密

签名：使用私钥加密，公钥解密。用于让所有公钥的所有者验证私钥所有者的身份并且用来防止私钥所有者发布的内容被篡改，但是不是用来保证内容不被他人获得的
加密：用公钥加密，私钥解密。用于向公钥所有者发布星系，这个信息可能被他们篡改，但是无法被他人获取。

一般用来生成token。

```java
/**
 * 高级使用
 *  自定义生成 公钥和私钥
 */
@Test
public void RSATest() {
    KeyPair keyPair = SecureUtil.generateKeyPair(AsymmetricAlgorithm.RSA.getValue());
    PrivateKey privateKey = keyPair.getPrivate();
    PublicKey publicKey = keyPair.getPublic();
    System.out.println(publicKey);
    System.out.println(privateKey);
    System.out.println("----------");

    RSA rsa = new RSA(privateKey, publicKey);
    // 私钥加密,公钥解密
    System.out.println(new String(rsa.encrypt("test", KeyType.PrivateKey)));
    System.out.println(new String(rsa.decrypt(rsa.encrypt("test", KeyType.PrivateKey), KeyType.PublicKey)));
    // 公钥加密,私钥解密
    System.out.println(new String(rsa.encrypt("test", KeyType.PublicKey)));
    System.out.println(new String(rsa.decrypt(rsa.encrypt("test", KeyType.PublicKey), KeyType.PrivateKey)));

}

```

## 注意事项

大家使用的时候要注意几点：

- 有加密，就要考虑解密。
- 对于多处都需要加密的，可以在实体类自定义get和set方法，添加解密和加密操作。

