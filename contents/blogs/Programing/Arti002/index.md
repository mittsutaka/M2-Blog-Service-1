---
title: "News API + React + TypeScriptでニュースアプリ作成してみた"
date: "2020-05-21T11:12:03.284Z"
description: "News API + React + TypeScriptでニュースアプリを作成する方法です。News APIの基本的な使い方、API Keyの取得の仕方からサイトが完成するまでをコード付きで紹介します。"
category: "Programing"
tags: "Programing,TypeScript,React,News API,API"
---

# News API + React + TypeScriptでニュースアプリ作成してみた

## はじめに

ニュースアプリ作ってみたいなーと思っていて、調べているとNewsAPIというなんとも私が欲しかったAPIがあるということがわかり、それを使ってブラウザ上で表示するまでをReactでやろうかなと思いたったのでそのやり方を書いていきますので何かの参考になればと思います。


## 完成画面

こちらが今回作成したサイトの画面になります。

![完成画面](https://paper-attachments.dropbox.com/s_E7BD119BDDB84EC3895EB322558DF0363952FD402E3849C65AF1D1FED65A3CFF_1590026014747_image.png)



## 開発構成
- React
- TypeScript
- emotion(css-in-jsのライブラリ)


## NewsAPIとは

[こちら](https://newsapi.org/)にアクセスするとこんな画面が出てくる。英語が不得意な私からすると抵抗がかなりあるがおそらくAPI Keyを取得して投げるといい感じにレスポンスが返ってくるのであろうことがわかる。

![News API](https://paper-attachments.dropbox.com/s_E7BD119BDDB84EC3895EB322558DF0363952FD402E3849C65AF1D1FED65A3CFF_1589943033000_image.png)


少し下にスクロールをするとGETの場合の例が書いてある。
これは全部の記事の中からビットコインに関する記事で先月以降に書かれたものを最新順で取得してくる場合である。
なにやらとても簡単そうだ。

![例](https://paper-attachments.dropbox.com/s_E7BD119BDDB84EC3895EB322558DF0363952FD402E3849C65AF1D1FED65A3CFF_1589943162168_image.png)

## 料金体系

気になる無料枠は一日500リクエストまで。
で一ケ月前までの記事しか取得できない且つ新しい記事は15分遅れでないと取得ができない。
一日500リクエストはかなり少ないので注意が必要。私もやっている最中にReactの処理を誤り上限に達してしまった。

![料金体系](https://paper-attachments.dropbox.com/s_E7BD119BDDB84EC3895EB322558DF0363952FD402E3849C65AF1D1FED65A3CFF_1589957480836_image.png)

## API Keyを取得する

GET API Keyをクリック

![GET API Key](https://paper-attachments.dropbox.com/s_E7BD119BDDB84EC3895EB322558DF0363952FD402E3849C65AF1D1FED65A3CFF_1589943318176_image.png)


名前やメールアドレス、パスワードの登録等入力してSubmitをクリックする

![情報登録](https://paper-attachments.dropbox.com/s_E7BD119BDDB84EC3895EB322558DF0363952FD402E3849C65AF1D1FED65A3CFF_1589943363147_image.png)


Submitを送ると下記画面でAPI Keyが表示されるのでこれで取得ができた。

![API Key](https://paper-attachments.dropbox.com/s_E7BD119BDDB84EC3895EB322558DF0363952FD402E3849C65AF1D1FED65A3CFF_1589943553907_image.png)


登録したAPI Keyはヘッダー右の自分のメールアドレスをクリックするといつでも確認することができる

![](https://paper-attachments.dropbox.com/s_E7BD119BDDB84EC3895EB322558DF0363952FD402E3849C65AF1D1FED65A3CFF_1589943685219_image.png)

## React+Typescript プロジェクトの作成

下記コマンドで「news」というプロジェクトを作成しカレントディレクトリを移動しビルドしてみる
```sh
create-react-app news --typescript
cd news
npm start
```
この画面が出ればＯＫ

![成功画面](https://paper-attachments.dropbox.com/s_E7BD119BDDB84EC3895EB322558DF0363952FD402E3849C65AF1D1FED65A3CFF_1589949372318_image.png)

## UI設計

今回は適当だがこんな感じのものにします

![適当UI](https://paper-attachments.dropbox.com/s_E7BD119BDDB84EC3895EB322558DF0363952FD402E3849C65AF1D1FED65A3CFF_1589949615689_image.png)

## emotionをインストールする

css-in-jsのライブラリであるemotionを使うので入れる

```sh
npm install @emotion/core @emotion/styled
```

## News APIで記事情報をJSONで取得する

取得はこんな感じで書くとできる。

```tsx
const [news, setNews] = useState(ini);
useEffect(() => {
  const url = 'http://newsapi.org/v2/top-headlines?' +
    'country=ja&' +
    `apiKey=*******************`;
  let req = new Request(url);
  fetch(req)
    .then(async (response) => {
      setNews(await response.json());
    })
},[])
```

API Keyは5行目のここに入れる↓

    `apiKey=*******************`;


## ヘッダーの作成

こんなヘッダーを作る

![ヘッダー](https://paper-attachments.dropbox.com/s_E7BD119BDDB84EC3895EB322558DF0363952FD402E3849C65AF1D1FED65A3CFF_1590025734230_image.png)


コードはこちら

```tsx
import React from 'react';
import styled from "@emotion/styled";
const Wrapper = styled.header({
    height:"auto",
    padding:"10px",
    backgroundColor:"#7089FF",
    fontSize:32,
    color:"#fff"
})
const Header = ()=>{
    return(
        <Wrapper>
            NEWS
        </Wrapper>
    )
}
export default Header;
```

## 記事の部分の作成

こんな見た目にする↓

![記事見た目](https://paper-attachments.dropbox.com/s_E7BD119BDDB84EC3895EB322558DF0363952FD402E3849C65AF1D1FED65A3CFF_1590025914906_image.png)


コードはこちら

```tsx
const ImageBlock = styled.div({
})
const Image = styled.img({
  height: 200,
  width: 200,
  objectFit: "cover"
})
const Main = styled.main({
  padding: "20px 100px",
  display: "flex",
  flexDirection: "column"
})
const ArticleLink = styled.a({
  display: "flex",
  flexDirection: "row",
  marginBottom: 20,
  textDecoration: "none",
  color: "#333",
  cursor: "pointer",
  overflow:"hidden",
  height: 200,
  ":hover": {
    boxShadow:"1px 1px 6px 1px #2F4F4F"
  }
})
const Overview = styled.div({
  display: "flex",
  flexDirection: "column",
  padding: 10
})
const Title = styled.label({
  fontSize: "24px",
  cursor: "pointer"
})
const Description = styled.p({
})

<ArticleLink href={article.url} key={index}>
  <ImageBlock>
    <Image src={article.urlToImage} alt={article.title} />
  </ImageBlock>
  <Overview>
    <Title>{article.title}</Title>
    <Description>{article.description}</Description>
  </Overview>
</ArticleLink>
```

## 完成

ここまでのものを合わせて、さらにホバー時のアクションも加えて最終的に動きはこんな感じ↓

![完成形GIF](https://paper-attachments.dropbox.com/s_E7BD119BDDB84EC3895EB322558DF0363952FD402E3849C65AF1D1FED65A3CFF_1590026287552_news.gif)

## まとめ

ここまで作るのに4時間くらいで作成できた。
News API簡単なので是非試してみてはいかがでしょうか。また、Reactのフォルダ構成やファイルの構成は適当なのでご容赦願います。
改めてReact+TypeScriptは非常にスピーディに書くことができて便利だし、楽しい！！
お問い合わせからコメント等いただけるとめちゃくちゃ嬉しいです。

