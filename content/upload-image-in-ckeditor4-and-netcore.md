---
title: upload image in ckeditor4 and netcore
date: "2020-03-05"
img: "/images/blog/ckeditor4.jpg"
path: "/blog/upload-image-in-ckeditor4-and-netcore"
type: article
lang: en
---

inside ckeditor4 folder add this inside `config.js`

```js
CKEDITOR.editorConfig = function(config) {
  // other config
  config.removeDialogTabs =
    "image:advanced;image:Link;link:advanced;link:upload"
  config.filebrowserImageUploadUrl = "<Address-to-controller>"
}
```

you can add static address for uploading pic like: `/Admin/Upload` or dynamic depend on when it happen like `?handler=UploadImage` in razor page framework.

for prevent `400` error, Forgery problem we must do two things. in `Startup.cs` file add this line:

```cs
public void ConfigureServices(IServiceCollection services)
{
  // other things
  services.AddAntiforgery(o => o.HeaderName = "XSRF-TOKEN");
}
```

every time we use ckeditor4 in cshtml file add this things.

```cshtml
// in form or other place
@Html.AntiForgeryToken()

// when we called ckeditor4
<script>
  CKEDITOR.replace('City_Description', {
    language: 'fa',
    fileTools_requestHeaders: {
      "XSRF-TOKEN":$('input:hidden[name="__RequestVerificationToken"]').val()
    }
  });
</script>
```
