---
title: "Google 外部認証用のクライアントIDとクライアントシークレットを取得する"
date: "2020-04-22T01:12:03.284Z"
description: "GoogleのクライアントIDとクライアントシークレットを取得する。背景としては自社システムで外部認証でのログインをするためにGoogleのクライアントＩＤとクライアントシークレットが必要となったのでその取得方法を書いていく"
category: "Google"
tags: "Google,OAuth,Google API"
---

# Google 外部認証用のクライアントIDとクライアントシークレットを取得する

## はじめに

自社システムで外部認証でのログインをするためにGoogleのクライアントＩＤとクライアントシークレットが必要となったのでその取得方法を書いていく


## Google APIsへアクセスしプロジェクトを登録する

まず[こちら](https://console.developers.google.com/)へアクセスして、googleアカウントでログインをする。ログインをするとこんな画面になるので右側の**プロジェクトを作成**をクリックする。

![Google API ホーム画面](https://paper-attachments.dropbox.com/s_46040F1E897EE1A5235C8DA499E6D331ED8406CC8A2D0309B31BB22A2D1714AA_1587518869139_image.png)


新しいプロジェクト画面が開くのでプロジェクト名を入力して作成をクリックする。

![新しいプロジェクト作成画面](https://paper-attachments.dropbox.com/s_46040F1E897EE1A5235C8DA499E6D331ED8406CC8A2D0309B31BB22A2D1714AA_1587519005932_image.png)



## サービス名の登録

プロジェクトの作成をクリックして暫くするとこのような画面が出てくるので右上通知の**プロジェクト名（ここではMy Project 57399）**をクリックする。


![APIとサービス](https://paper-attachments.dropbox.com/s_46040F1E897EE1A5235C8DA499E6D331ED8406CC8A2D0309B31BB22A2D1714AA_1587519092915_image.png)


するとプロジェクトのダッシュボードに遷移をする。
中央部の**ＡＰＩの概要に移動**をクリックする

![Google API ダッシュボード](https://paper-attachments.dropbox.com/s_46040F1E897EE1A5235C8DA499E6D331ED8406CC8A2D0309B31BB22A2D1714AA_1587519481650_image.png)


認証情報の作成の前にサービス名を登録する必要があるので左側のサイドメニューから**OAuth同意画面**をクリックする。

OAuth同意画面が開くのでUserTypeを選択して作成ボタンをクリックする。
UserTypeは作成するプロジェクトのスコープに応じて設定をするが今回はすべてのユーザーでよいので外部にチェックをつける

![OAuth同意画面](https://paper-attachments.dropbox.com/s_46040F1E897EE1A5235C8DA499E6D331ED8406CC8A2D0309B31BB22A2D1714AA_1587519910950_image.png)


こんな画面になるのでアプリケーション名を入力して下部にある保存ボタンをクリックする。


![アプリケーション名の入力](https://paper-attachments.dropbox.com/s_46040F1E897EE1A5235C8DA499E6D331ED8406CC8A2D0309B31BB22A2D1714AA_1587520046004_image.png)



## 認証情報の作成

サービス名の登録ができたら次に認証情報の作成を行う。
左側サイドメニューの**認証情報**をクリックする。


![APIとサービス画面](https://paper-attachments.dropbox.com/s_46040F1E897EE1A5235C8DA499E6D331ED8406CC8A2D0309B31BB22A2D1714AA_1587519644549_image.png)


次に、上側の**認証情報を作成**をクリックするとプルダウンで出てくる中から**OAuthクライアントID**をクリックする。


![認証情報の作成画面](https://paper-attachments.dropbox.com/s_46040F1E897EE1A5235C8DA499E6D331ED8406CC8A2D0309B31BB22A2D1714AA_1587519725205_image.png)


OAuthクライアントＩＤの作成画面にいくので、アプリケーションの種類を選択して必要であれば名前を変更後作成をクリックする。


![アプリケーションの種類選択](https://paper-attachments.dropbox.com/s_46040F1E897EE1A5235C8DA499E6D331ED8406CC8A2D0309B31BB22A2D1714AA_1587520181965_image.png)


するとOAuthクライアントを作成しましたと画面が出て、クライアントIDとクライアントシークレットが表示される。


![作成完了画面](https://paper-attachments.dropbox.com/s_46040F1E897EE1A5235C8DA499E6D331ED8406CC8A2D0309B31BB22A2D1714AA_1587520303107_image.png)


OKを押すと一覧画面になり、先ほど作成した認証情報をクリックするといつでもクライアントＩＤとクライアントシークレットが取得できる

![認証情報一覧](https://paper-attachments.dropbox.com/s_46040F1E897EE1A5235C8DA499E6D331ED8406CC8A2D0309B31BB22A2D1714AA_1587520413933_image.png)

![詳細画面](https://paper-attachments.dropbox.com/s_46040F1E897EE1A5235C8DA499E6D331ED8406CC8A2D0309B31BB22A2D1714AA_1587520868866_image.png)



## まとめ

GoogleのクライアントＩＤとクライアントシークレットを取得できた。次はこれを使って外部認証を行うアプリケーションを作成するのと、自分で外部認証のサービスを作成していく。

