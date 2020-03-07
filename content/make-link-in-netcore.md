---
title: make link in netcore
date: "2020-03-08"
img: "/images/blog/a-tag.jpg"
path: "/blog/make-link-in-netcore"
type: article
lang: en
---

in `MVC` framework

```cshtml
<a asp-controller="controller_name" asp-action="action_name"> link title </a>

<!-- if you use area -->
<a asp-area="area_name" asp-controller="controller_name" asp-action="action_name"> link title </a>
<!-- or -->
@Html.ActionLink("link title", "action_name", "controller_name", new {Id=3})
```

in `web-page` projects

```cshtml
<!-- absolote address -->
<a asp-page="/Admin/Index"> title </a>

<!-- local address with additional info -->
<a asp-page="./Delete" asp-route-id="id_value"> title </a>
```
