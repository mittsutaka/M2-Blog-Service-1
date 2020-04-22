---
title: "【C#】ASP.NET MVCでGoogleの外部認証を使用する"
date: "2020-04-22T10:12:03.284Z"
description: "ASP.NET MVCでgoogle外部認証を実装する。自社システムにGoogleの外部認証を入れることとなったのでその手順を書いていく。ユーザーとしても複数のアカウントを保持するのは好ましくないのでGoogleアカウントでログインができたらユーザービリティが向上するはずである。"
category: "C#"
tags: "Google,API,C#,OAuth"
---

# 【C#】ASP.NET MVCでGoogleの外部認証を使用する

## はじめに

自社システムにGoogleの外部認証を入れることとなったのでその手順を書いていく。ユーザーとしても複数のアカウントを保持するのは好ましくないのでGoogleアカウントでログインができたらユーザービリティが向上するはずである。


## 準備

下記二点を行う

- ASP.NET MVCの新規プロジェクトを作成する
- googleのクライアントIDとクライアントシークレットを取得する

クライアントIDとクライアントシークレットの取得に関しては[こちらの記事](https://m2-gaming.com/blogs/Google/OAuth-1/)を参照


## Google外部認証を有効化する

最初にプロジェクトを作成したときは外部認証が有効になっていないので `App_Start`フォルダのStartup.Auth.csのGoogle外部認証部分をコメントアウトしてクライアントIDとクライアントシークレットを入力する。
```cs:title=Startup.Auth.cs
using System;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin;
using Microsoft.Owin.Security.Cookies;
using Microsoft.Owin.Security.Google;
using Owin;
using OAuthApplication.Models;

namespace OAuthApplication
{
    public partial class Startup
    {
        // 認証の構成の詳細については、https://go.microsoft.com/fwlink/?LinkId=301864 を参照してください
        public void ConfigureAuth(IAppBuilder app)
        {
            ***

            // 次の行のコメントを解除して、サード パーティのログイン プロバイダーを使用したログインを有効にします
            //app.UseMicrosoftAccountAuthentication(
            //    clientId: "",
            //    clientSecret: "");

            //app.UseTwitterAuthentication(
            //   consumerKey: "",
            //   consumerSecret: "");

            //app.UseFacebookAuthentication(
            //   appId: "",
            //   appSecret: "");

            app.UseGoogleAuthentication(new GoogleOAuth2AuthenticationOptions()
            {
                ClientId = "**********.apps.googleusercontent.com",
                ClientSecret = "*************************"
            });
        }
    }
}
```

## リダイレクトURIを設定する

認可レスポンスパラメータ群を受け取る場所となる遷移先を事前に登録をしておく。
まず、GoogleAPIの認証情報（[こちら](https://console.developers.google.com/apis/credentials)）へアクセスする。
作成したOAuth2.0クライアントIDの編集ボタンをクリックして、詳細画面へいく。

![認証情報](https://paper-attachments.dropbox.com/s_FEBA181C822FD8083CB24BAE66028E39FCAA1192EFE9ED4C28DF3E0D057D98A1_1587531329724_image.png)


URIを追加ボタンをクリックして、入力ボックスが現れるのでそこにURIを入力して保存をクリックする。
ここではローカルで立ち上げたところがリダイレクトURIとなるので「https://localhost:44397/signin-google 」と入力した。環境に合わせて変更する必要がある。

![詳細画面](https://paper-attachments.dropbox.com/s_FEBA181C822FD8083CB24BAE66028E39FCAA1192EFE9ED4C28DF3E0D057D98A1_1587532389589_image.png)

## 確認

ここまでで設定は完了である。
ビルドして実行をし、ログイン画面にいくとgoogleが追加されている。

![ログイン画面](https://paper-attachments.dropbox.com/s_FEBA181C822FD8083CB24BAE66028E39FCAA1192EFE9ED4C28DF3E0D057D98A1_1587531537306_image.png)


Googleをクリックして、Googleアカウントで認証を行うと下記画面となる。
ここでも登録をクリックする。

![アプリケーション側での登録](https://paper-attachments.dropbox.com/s_FEBA181C822FD8083CB24BAE66028E39FCAA1192EFE9ED4C28DF3E0D057D98A1_1587531607246_image.png)


ここまで終わるとログインが完了する。

![ログイン完了画面](https://paper-attachments.dropbox.com/s_FEBA181C822FD8083CB24BAE66028E39FCAA1192EFE9ED4C28DF3E0D057D98A1_1587531866915_image.png)


ちなみにDBではこのように登録されている。パスワードがないことがわかる。

![ＤＢ確認](https://paper-attachments.dropbox.com/s_FEBA181C822FD8083CB24BAE66028E39FCAA1192EFE9ED4C28DF3E0D057D98A1_1587531803588_image.png)



## まとめ

非常に簡単にGoogleの外部認証を使ってログインすることができた。次は独自の外部認証サービス自体を作成していく。

