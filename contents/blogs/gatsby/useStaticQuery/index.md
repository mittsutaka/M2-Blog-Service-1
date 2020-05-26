---
title: "【Gatsby.js + TypeScript】useStaticryQueryの使い方"
date: "2020-05-26T17:12:03.284Z"
description: "Gatsby.js+TypescriptでのuseStaticQueryの使い方に関して。本サイトの実際のコードを参考に簡単な使い方を紹介します。便利なhookの紹介です。"
category: "Gatsby"
tags: "[Gatsby,React,TypeScript]"
---


# 【Gatsby.js + TypeScript】useStaticryQueryの使い方 

![ＴＯＰ画像](https://paper-attachments.dropbox.com/s_9353E2B9C0445D18B8490DA33E1E9607BF7D65041947EC33C21B00031058FA9D_1590456053088_code-2620118_1920.jpg)

## はじめに

Gatsby.jsは本当に便利な静的サイト生成ツールです。
便利なフレームワークではありますが、個人的に一番やっかいなのはQrapgQLではないでしょうか。
使えると便利なのですが他で触る機会が少ないので理解するまでに結構時間がかかります。
その中で今回はuseStaticQueryの使い方を書いていきますので何かの参考になればと思います。
公式ドキュメントは[こちら](https://www.gatsbyjs.org/docs/use-static-query/)です。

## やりたいこと

**コンポーネントにGraphQLで取得したデータを渡すこと**


## 開発環境
- Gatsby.js
- TypeScript
- emotion(css-in-jsのフレームワーク)


## まずStaticQueryとは

公式ドキュメントより

> Gatsby v2 introduces StaticQuery, a new API that allows components to retrieve data via a GraphQL query.

Gatsbyのバージョン2より追加された新しいAPIでコンポーネントがGraphQL経由でデータを取得できるようになります。
<br>
なぜこれを使うかというと今までの記述だとページ生成時しかデータを渡すことができずにいて、レイアウトページ等の親コンポーネントから順々にデータを渡す必要がありました。
階層が浅ければいいのですが、何階層も下のコンポーネントにデータを渡すのは一苦労でした。

それを解決するのがStaticQueryです。
つまりどこのコンポーネントでもQraphQLからデータが取れるようになるということです。
<br>
さらにStaticQueryの書き方は複数あって、今回はフックであるuseStaticQueryを使用しています。


## 使い方

さっそく使っていきましょう。
今回はこのサイトのフッター部でも使用している管理者情報にアバターの顔を表示している部分のコードを抜き出しながらやっていきます。
画像データをQraphQL経由で取得をすることとします。

![完成画面](https://paper-attachments.dropbox.com/s_9353E2B9C0445D18B8490DA33E1E9607BF7D65041947EC33C21B00031058FA9D_1590454801647_image.png)

## importする

useStaticQueryを使用できるようにまずimportします。

```tsx
import { useStaticQuery, graphql } from 'gatsby'
```

## GraphQLでデータを取得する

GraphQLで取得したデータを変数dataに格納します。
色々やり方はあると思いますがここではfilterでimagesフォルダにあるFileを取得しています。
これだけだと画像データは複数取得できてしまうので、コンポーネントに汎用性を持たせるために後の処理で画像を限定します。

```tsx
const data: ImageQuery = useStaticQuery(
    graphql`
    query Image{
      allFile(filter: {sourceInstanceName: {eq: "images"}}) {
        edges {
          node {
            id
            relativePath
            sourceInstanceName
            childImageSharp {
              id
              fixed (width: 200,height:200){
                base64
                width
                height
                src
                srcSet
                originalName
              }
            }
          }
        }
      }
    }
    `
  )
```

## 画像の限定

親コンポーネントでこのようにImageコンポーネントを呼び出します。

```tsx
<Image name="avater-face.png" />
```

nameに画像のファイル名を指定します。

Imageコンポーネント側ではこのpropsによりfindメソッドでファイル名を比較します。

```tsx
const edge = data.allFile.edges.find(edge => edge.node.relativePath == props.name);
```

コンポーネントのexport
最後にreturnでgatsby-imagesのImgコンポーネントを返せば完了です。

```tsx
return (
    <Img fixed={edge.node.childImageSharp.fixed} />
  )
```

## コード全体（Imageコンポーネント）
```tsx:title=Image.tsx
import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { ImageQuery } from "../../types/graphql-types";
import Img from 'gatsby-image';

interface Props {
  name?: string,
}

const Image: React.FC<Props> = (props) => {
  const data: ImageQuery = useStaticQuery(
    graphql`
    query Image{
      allFile(filter: {sourceInstanceName: {eq: "images"}}) {
        edges {
          node {
            id
            relativePath
            sourceInstanceName
            childImageSharp {
              id
              fixed (width: 200,height:200){
                base64
                width
                height
                src
                srcSet
                originalName
              }
            }
          }
        }
      }
    }
    `
  )
  const edge = data.allFile.edges.find(edge => edge.node.relativePath == props.name);
  return (
    <Img fixed={edge.node.childImageSharp.fixed} />
  )
}
export default Image;
```

## まとめ

gatsby.jsで画像を表示させる処理は他のものに比べてかなりめんどくさいですが、このように汎用コンポーネントにしてやればそれほどめんどくさくなくなります。
ただ、幅や高さの指定をするのが結構めんどくさいのでその辺もっといい感じに書けるようになれるとさらによくなると思います。


