---
title: load data in layout
date: "2020-03-05"
type: article
lang: en
excerpt: 'Sometimes we need to inject data from data base directly in layout.'
coverImage: "/img/blog/layout.jpg"
author:
  name: Mohsen Shabanian
  picture: '/img/me.jpg'
ogImage:
  url: "/img/blog/layout.jpg"
---

for using or load database information in layout, we can use `inject` in `layout.html`.

```cshtml
@inject ProjectName.Data.ApplicationDbContext contex
@{
    var posts = contex.Posts.ToList();
}

@foreach(var post in posts)
{
    <h4> @post.Title </h4>
}
```
