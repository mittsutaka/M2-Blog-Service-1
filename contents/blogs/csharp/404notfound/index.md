---
title: "ASP.NET MVC 404エラー画面実装"
date: "2020-04-17T05:12:03.284Z"
description: "ASP.NET MVCの404エラー時に404用の画面を設定したのでそれに関して備忘録としてまとめる"
category: "CSharp"
---

# ASP.NET MVC 404エラー画面実装

## はじめに

業務でASP.NET MVCの404エラー時に404用の画面を設定したのでそれに関して備忘録としてまとめる

## Web.configへのcustomErrorsの追加

下記のように404エラーが起きたときにリダイレクトするように設定する
```xml:title=Web.config
      <system.web>
        <customErrors defaultRedirect="~/Error/" mode="On">
          <error statusCode="404" redirect="~/Error/NotFound"/>
        </customErrors>
      </system.web>
```

## ErrorControllerを作成する
```cs:title=ErrorController.cs
public class ErrorController : Controller
{
    public ActionResult NotFound()
    {
        return View();
    }
}
```


## エラー画面のページを作成する
```cs:title=NotFound.cshtml
@{
    ViewBag.Title = "404 Not Found";
}
<div class="body-section">
    <div class="flex-col text-center ali-c mt-20">
        <p class="fs-128">404</p>
        <p class="fs-28">Sorry, the page you're looking for cannot be found...</p>
        <button class="error-btn" onclick="location.href='/Recipe/Register'">トップページへ</button>
    </div>
</div>
```


## 参考資料
https://tekitoumemo.hatenablog.com/entry/2018/05/22/232204


https://pgmemo.tokyo/data/archives/1243.html


http://www.billionplan.com/blog/design/404-error-pagedesign48.html


