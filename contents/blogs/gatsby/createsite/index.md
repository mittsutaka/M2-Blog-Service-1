---
title: "Gatsby.js+TypeScript+Netlifyでブログサイトを作成する"
date: "2020-04-24T17:12:03.284Z"
description: "Gatsby.js+Typescript+Netlifyでサイト構築。本サイトもGatsby.jsとTypeScriptとNetlifyでサイト構築を行っているが便利すぎたのでそれの紹介をする。TypeScriptにしている記事があまりないように思ったこともあるのと次作る時の私の備忘録用でもある。
ここではサイト構築までの手順のみ紹介するので「Gatsbyとは」とか「Netlifyとは」といったことは言及しない。細かいところは適宜ググってほしい。"
category: "Gatsby"
tags: "Gatsby,React,TypeScript,Netlify,Blog"
---

# Gatsby.js+TypeScript+Netlifyでブログサイトを作成する

## はじめに

本サイトもGatsby.jsとTypeScriptとNetlifyでサイト構築を行っているが便利すぎたのでそれの紹介をする。TypeScriptにしている記事があまりないように思ったこともあるのと次作る時の私の備忘録用でもある。
ここではサイト構築までの手順のみ紹介するので「Gatsbyとは」とか「Netlifyとは」といったことは言及しない。細かいところは適宜ググってほしい。


## Gatsby.jsをインストールする

コマンドプロンプトを開き下記実行（nodeが必要）
```sh
npm install -g gatsby-cli
```

## ブログサイト構築

一から作るのは大変なので[こちら](https://www.gatsbyjs.org/starters/?v=2)のスターターブログから好みのものを選んで実行する。今回は[こちら](https://www.gatsbyjs.org/starters/mhadaily/gatsby-starter-typescript-power-blog/)にした。
```sh
gatsby new gatsby-starter-typescript-power-blog https://github.com/mhadaily/gatsby-starter-typescript-power-blog
```

とりあえず確認のため立ち上げる

```sh
cd gatsby-starter-typescript-power-blog
gatsby develop
```

表示されるローカルホストを立ち上げるといい感じのやつがでてくる。

![localhostコマンド](https://paper-attachments.dropbox.com/s_9A2ECDA747DCE33F4374A5FABC2E4566013340664573F329047E265397AA71FB_1587715680655_image.png)



![立ち上げた画面](https://paper-attachments.dropbox.com/s_9A2ECDA747DCE33F4374A5FABC2E4566013340664573F329047E265397AA71FB_1587715748459_image.png)


新規でブログを追加したい場合は/blogの下にフォルダを作って、index.mdファイルで記事を保存すればＯＫ

![ブログ追加フォルダ](https://paper-attachments.dropbox.com/s_9A2ECDA747DCE33F4374A5FABC2E4566013340664573F329047E265397AA71FB_1587715959213_image.png)

## Githubへプッシュ

Nrtlifyではgithubを使うとmasterにpushすればそのままデプロイしてくれるため便利なのでその設定をしていく。
新規リポジトリを作成して下記実行する。
```sh
git remote add origin https://github.com/*********/gatsbytest.git
git push -u origin master
```

これでgithubの設定終わり


## Netlifyへのサイト登録

Netlifyのアカウント作って、teamsのところにいき右上の**New site from Git**をクリック

![Netlify teams画面](https://paper-attachments.dropbox.com/s_9A2ECDA747DCE33F4374A5FABC2E4566013340664573F329047E265397AA71FB_1587716443654_image.png)


GitHubをクリック

![Create a new site](https://paper-attachments.dropbox.com/s_9A2ECDA747DCE33F4374A5FABC2E4566013340664573F329047E265397AA71FB_1587716547435_image.png)



先ほど作成したgithubのリポジトリを選択する

![githubリポジトリの選択](https://paper-attachments.dropbox.com/s_9A2ECDA747DCE33F4374A5FABC2E4566013340664573F329047E265397AA71FB_1587716673216_image.png)


こんな画面が出て特に変更するところはないので下部のDeploy siteをクリック

![Deploy site](https://paper-attachments.dropbox.com/s_9A2ECDA747DCE33F4374A5FABC2E4566013340664573F329047E265397AA71FB_1587716852035_image.png)


クリックするとこんな画面になるのでしばらく待つ。

![deploy中](https://paper-attachments.dropbox.com/s_9A2ECDA747DCE33F4374A5FABC2E4566013340664573F329047E265397AA71FB_1587716929862_image.png)


こうなるとデプロイ完了。アクセスすると。

![deploy完了](https://paper-attachments.dropbox.com/s_9A2ECDA747DCE33F4374A5FABC2E4566013340664573F329047E265397AA71FB_1587717154589_image.png)


表示されてデプロイが成功したことがわかる。

![公開完了](https://paper-attachments.dropbox.com/s_9A2ECDA747DCE33F4374A5FABC2E4566013340664573F329047E265397AA71FB_1587717213396_image.png)



## まとめ

Gatsby+TypeScript+Netlifyでサイト構築することができた。
あとは記事を書いたりデザインいじったりお好みでやればオリジナルなサイトができる。簡単すぎる。

