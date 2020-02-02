
## 说明
一个 KOA + typescript + mongodb + graphql 项目 demo


## 运行
1. DBConn.ts修改数据库连接地址
2. npm run dev

## 访问  
http://localhost:3000/graphql   
 是一个测试graphqQL的界面， 左边可以设置查询语句

###  查询用户列表  

```
query {
  users {
    _id
    name
    sex
    del
    createTime
    updateTime
  }
}
```


### 查询用户和待办列表  

```
query {
  users {
    _id
    name
    sex
    del
    createTime
    updateTime
  }
  todos {
    _id
    title
    del
    createTime
    updateTime
  }
}
```



### 查询单个用户  

```
query {
   user(_id:"5e327063daf4456b5a6d8c7d") {
     _id
     name
     sex
     del
     createTime
     updateTime
   }
 }
```


### 添加用户  

```
mutation {
   addUser(name: "maomao3", sex: 1) {
     _id
     name
     sex
     del
     createTime
     updateTime
   }
 }
```
 
### 删除用户

```
mutation {
    delUser(_id:"5e327063daf4456b5a6d8c7d") {
      _id
      name
      sex
      del
      createTime
      updateTime
    }
 }
```



### 更新用户

```
mutation {
   updateUser(_id: "5e3667bd57e26c0f050c37cc", sex: 2) {
     _id
     name
     sex
     del
     createTime
     updateTime
   }
 }
```
