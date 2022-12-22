---
title: html select from enum in Dot Net Core
date: "2020-03-05"
type: article
lang: en
excerpt: 'Simple code for automatically making select tag from enum'
coverImage: "/img/blog/select.jpg"
author:
  name: Mohsen Shabanian
  picture: '/img/me.jpg'
ogImage:
  url: "/img/blog/select.jpg"
---

it's easy. just use `GetEnumSelectList` html helper.

```cshtml
<select asp-for="Property.PropertyType" asp-items="Html.GetEnumSelectList<PropertyType>()" class="form-control">
  <option selected></option>
</select>
```
