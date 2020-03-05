---
title: load data in layout
date: "2020-03-05"
img: "/images/blog/layout.jpg"
path: "/blog/load-data-in-layout"
type: article
lang: en
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
