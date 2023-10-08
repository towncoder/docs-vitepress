## 行转列

先准备一个测试表

```sql
-- 行列转换
CREATE TABLE tb_score(
    id INT(11) NOT NULL auto_increment,
    userid VARCHAR(20) NOT NULL COMMENT '用户id',
    subject VARCHAR(20) COMMENT '科目',
    score DOUBLE COMMENT '成绩',
    PRIMARY KEY(id)
)ENGINE = INNODB DEFAULT CHARSET = utf8 comment '行列转换测试';

INSERT INTO tb_score(userid,subject,score) VALUES ('001','语文',90);
INSERT INTO tb_score(userid,subject,score) VALUES ('001','数学',92);
INSERT INTO tb_score(userid,subject,score) VALUES ('001','英语',80);
INSERT INTO tb_score(userid,subject,score) VALUES ('002','语文',88);
INSERT INTO tb_score(userid,subject,score) VALUES ('002','数学',90);
INSERT INTO tb_score(userid,subject,score) VALUES ('002','英语',75.5);
INSERT INTO tb_score(userid,subject,score) VALUES ('003','语文',70);
INSERT INTO tb_score(userid,subject,score) VALUES ('003','数学',85);
INSERT INTO tb_score(userid,subject,score) VALUES ('003','英语',90);
INSERT INTO tb_score(userid,subject,score) VALUES ('003','政治',82);


select * from tb_score;

-- 行转列
-- 1.case when then else end
select userid,sum(case subject when '语文' then score else 0 end) as '语文' from tb_score group by userid;
-- 2.if
select userid,sum(if(subject = '语文',score,0)) as '语文' from tb_score group by userid;
-- 3.GROUP_CONCAT
SELECT userid,GROUP_CONCAT(`subject`,':',score)AS 成绩 FROM tb_score GROUP BY userid;


```

**补充：UNION与UNION ALL的区别（摘）**

- 对重复结果的处理：UNION会去掉重复记录，UNION ALL不会；

- 对排序的处理：UNION会排序，UNION ALL只是简单地将两个结果集合并；

- 效率方面的区别：因为UNION 会做去重和排序处理，因此效率比UNION ALL慢很多；



## 批量替换



```sql
UPDATE `bms_bms`.cbim_ent_department
SET code = regexp_replace(code, '[[:punct:][:space:]]', '');
```



## 利用binlog恢复日志

https://blog.csdn.net/weixin_63946253/article/details/128084812
