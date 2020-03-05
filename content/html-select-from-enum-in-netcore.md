---
title: html select from enum in netcore
date: "2020-03-05"
img: "/images/blog/select.jpg"
path: "/blog/html-select-from-enum-in-netcore"
type: article
lang: en
---

it's easy. just use `GetEnumSelectList` html helper.

```cshtml
<select asp-for="Property.PropertyType" asp-items="Html.GetEnumSelectList<PropertyType>()" class="form-control">
  <option selected></option>
</select>
```
