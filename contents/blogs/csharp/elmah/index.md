---
title: "ASP.NET MVCのエラーログ出力をELMAHで行う"
date: "2020-04-20T06:12:03.284Z"
description: "自社サービスはASP.NET MVCを用いて開発をしているが、規模が大きくなりつつあり、エラーログ出力をしていなかったのでELMAHで実装することとなった"
category: "CSharp"
---

# ASP.NET MVCのエラーログ出力をELMAHで行う

## はじめに

自社サービスはASP.NET MVCを用いて開発をしているが、規模が大きくなりつつあり、エラーログ出力をしていなかったのですることとなった。
調べるとELMAHが便利且つ、実装が簡単そうだったのでELMAHでやってみることとした


## ELMAHとは

ELMAHとは**Error Logging Modules and Handlers**の略であり、アプリケーション全体のエラーログ機能の管理を簡単な設定を書くだけで実装ができるプラグインである。
エラーログはデータベースに保存をして、ホストURL/elmahでログを見ることができる


## プロジェクトにELMAHをインストール

まずELMAHをプロジェクトに入れていく。
Nuget管理画面の追加で”elmah”と打つと下記画面となり、今回は.NET MVCなので**Elmah.MVC**をインストールする。

![Nuget画面](https://paper-attachments.dropbox.com/s_C86EA7B6112A1A7E6FCE74727A01F96EE1927751E9137B168FC02ACE8202BA9C_1587345748260_image.png)


インストールするとWeb.configに自動的にELMAH設定関連のコードが追加される。メールを送る設定や認証ユーザーしかアクセスできない制限等もweb.configで行うが今回は最低限の動作までを対象とするので割愛する。


## データベースにテーブルとストアドプロシージャを追加する

[こちら](https://github.com/alexbeletsky/elmah-mvc)のgithubをダウンロードして、/db/database.sqlファイルを実行する。
いろんな実行方法があるが今回はMicrosoft SQL Server Management Studioで実施した。Microsoft SQL Server Management Studioの接続に関しては[こちらの記事](https://m2-gaming.com/blogs/CSharp/SSMS-Local/)を参照していただきたい。

実行するときは最初のUSE文のところだけ追加したいデータベース名を入れる

```sql:title=database.sql
USE [***]　←***にはデータベース名を入れる
GO
/****** Object:  Table [dbo].[ELMAH_Error]    Script Date: 03/02/2011 22:37:07 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ELMAH_Error](
        \[ErrorId\] [uniqueidentifier] NOT NULL,
        \[Application] [nvarchar\](60) NOT NULL,
        \[Host] [nvarchar\](50) NOT NULL,
        \[Type] [nvarchar\](100) NOT NULL,
        \[Source] [nvarchar\](60) NOT NULL,
        \[Message] [nvarchar\](500) NOT NULL,
        \[User] [nvarchar\](50) NOT NULL,
        \[StatusCode\] [int] NOT NULL,
        \[TimeUtc\] [datetime] NOT NULL,
        \[Sequence\] [int] IDENTITY(1,1) NOT NULL,
        \[AllXml\] [ntext] NOT NULL,
    CONSTRAINT [PK_ELMAH_Error] PRIMARY KEY NONCLUSTERED 
(
        [ErrorId] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
```

実行が正常にできるとテーブルとストアドプロシージャに追加されていることが確認できる

![SQLオブジェクトエクスプローラー](https://paper-attachments.dropbox.com/s_C86EA7B6112A1A7E6FCE74727A01F96EE1927751E9137B168FC02ACE8202BA9C_1587363440928_image.png)



## Web.configでの接続設定

最後にWeb.configのerrorLogの接続文字列名を変更追加したら実装は完了となる。

```xml:title=Web.config
<elmah>
    <security allowRemoteAccess="0" />
    <errorLog type="Elmah.SqlErrorLog, Elmah"　connectionStringName="DefaultConnection" />
</elmah>
```

接続文字列名はconnectionStringsのname属性に入れている値を入力する。

```xml:title=Web.config
<connectionStrings>
    <add name="DefaultConnection" connectionString="*********" providerName="System.Data.SqlClient" />
</connectionStrings>
```

## 実装の確認

ローカルで実行する場合はlocalhost:*/elmahにアクセス（何かエラーを故意に起こしてから）すると下記のような画面が出る。
Detailsをクリックするとより詳細な情報が確認できる。

![elmah確認画面](https://paper-attachments.dropbox.com/s_C86EA7B6112A1A7E6FCE74727A01F96EE1927751E9137B168FC02ACE8202BA9C_1587363768634_image.png)



## まとめ

エラーログ出力を自分で実装するとなると結構大変だが、ELMAHを使うことにより実装コストが大幅に削減できるのでおすすめである。他にもプラグインがあったのでそちらも試してみようと思う。

