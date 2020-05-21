---
title: "Microsoft SQL Server Managemant StudioでローカルDBに接続する"
date: "2020-04-20T05:12:03.284Z"
description: "ASP.NET MVCでシステム開発をしていて、普段はコードファーストでデータベースのアップデートを行っているが、プラグイン導入で直接SQL実行する必要があったのでその方法をまとめる"
category: "CSharp"
---

# Microsoft SQL Server Managemant StudioでローカルDBに接続する

## はじめに

ASP.NET MVCでシステム開発をしていて、普段はコードファーストでデータベースのアップデートを行っているが、プラグイン導入で直接SQL実行する必要があったのでその方法をまとめる


## SSMSのインストール

まずはSQL Server Management Studioをインストールしていく
[こちら](https://docs.microsoft.com/ja-jp/sql/ssms/download-sql-server-management-studio-ssms?redirectedfrom=MSDN&view=sql-server-ver15)からダウンロードする

![SSMSダウンロード場所](https://paper-attachments.dropbox.com/s_9850114BBD52EB775ECE1E666BA8E5CA0C221027D4AE9AF44933237C899A6C20_1587350506511_image.png)


ダウンロードしたファイルを実行してインストールボタンをクリックでインストールされる


## SSMSの設定

最初に起動すると下記画面が出てくる

![SSMS初期画面](https://paper-attachments.dropbox.com/s_9850114BBD52EB775ECE1E666BA8E5CA0C221027D4AE9AF44933237C899A6C20_1587350579114_image.png)


### サーバー名を入力
ローカルのサーバー名はコマンドプロンプトで下記実行することで得られる

```shell
sqllocaldb info
```

![shellコマンドプロンプト](https://paper-attachments.dropbox.com/s_9850114BBD52EB775ECE1E666BA8E5CA0C221027D4AE9AF44933237C899A6C20_1587350868830_image.png)


コマンドプロンプトで取得したサーバ名で入力するとローカルＤＢに接続ができる
```
(localdb)\{取得したサーバ名}
```

認証はWindows認証のままでＯＫ


## まとめ

データベースの更新や設定はVisusal Studio任せであったので適時手動で実行しながら理解を深めていきたい

