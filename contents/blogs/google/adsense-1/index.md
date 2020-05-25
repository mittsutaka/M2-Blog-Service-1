---
title: "Google Adsenseの申請をしました（一回目）"
date: "2020-04-21T01:12:03.284Z"
description: "本サイト開設から約2週間。Google Adsenseに申請をしました。一回目としているのは一回で申請が通ることはないだろうという気持ちから。ではあるが通ってくれるといいなという淡い期待もあり。多くの記事があるので不要な気もするが手順と今までやったことを簡単にまとめようかなと思います。"
category: "Google"
tags: "Google,Adsense,Gatsby,SEO"
---

# Google Adsenseの申請をしました（一回目）

## はじめに

本サイト開設から約2週間。Google Adsenseに申請をしました。一回目としているのは一回で申請が通ることはないだろうという気持ちから。ではあるが通ってくれるといいなという淡い期待もあり。多くの記事があるので不要な気もするが手順と今までやったことを簡単にまとめようかなと思います。


## Google Adsense申請手順

申請の仕方は[こちら](https://takuetsu.jp/google-adsense-sinsa/)の記事を参考にしました。

まずこちらの[Google Adsense](https://www.google.co.jp/adsense/start/#?modal_active=none)のサイトにアクセスし、googleアカウントでログインします。

![google adsenseサイト](https://paper-attachments.dropbox.com/s_5C3B367415BD6AAE42A0915D6F1F17044C5CA733B7FFBB0A5DC3D8B7A2A42B75_1587437093283_ss+1.png)



利用開始を押すとお申込み画面になるので自分のサイトURLとメールアドレスとメールを受け取るかのチェックボックスがあるので入力する。私はメールいっぱいくるのが嫌なので受け取らないことにしました。後で変えることもできます。

![情報入力画面](https://paper-attachments.dropbox.com/s_5C3B367415BD6AAE42A0915D6F1F17044C5CA733B7FFBB0A5DC3D8B7A2A42B75_1587432050966_image.png)


保存して次へと押すと個人情報を入力する画面になるのでそちらは適宜入力をする。

そのあとにAdsenseのコードをサイトに貼る必要があるので自分のサイトにAdsenseのコードを張りつけてデプロイする。
私の場合はGatsby.jsで作っているので``gatsby-plugin-google-adsense``を使ってgatsby-config.jsに自分のca-pub-************貼り付けて完了をクリック。

```js:title=gatsby-config.js
{
    resolve: `gatsby-plugin-google-adsense`,
    options: {
        publisherId: `ca-pub-***********`
    },
},
```

![サイトスクリプト貼りつけ](https://paper-attachments.dropbox.com/s_5C3B367415BD6AAE42A0915D6F1F17044C5CA733B7FFBB0A5DC3D8B7A2A42B75_1587432920764_image.png)


するとこんな画面になるので後は待つだけ！！！

![完了画面](https://paper-attachments.dropbox.com/s_5C3B367415BD6AAE42A0915D6F1F17044C5CA733B7FFBB0A5DC3D8B7A2A42B75_1587432952909_image.png)



## 申請までにやったこと

申請した時のサイトの状態がこちら

- 記事数：8
- サイトマップ設置
- 問い合わせフォーム設置
- ホーム画面のlighthouseの結果を全て100にした
![Google LightHouse 結果](https://paper-attachments.dropbox.com/s_5C3B367415BD6AAE42A0915D6F1F17044C5CA733B7FFBB0A5DC3D8B7A2A42B75_1587433108387_lighthouse_100.png)



## 最後に

結果が出たらまた記事でご報告します。
どうなるか期待せず待っていようかと思います。

## 結果（追記）
[結果はこちら](https://m2-gaming.com/blogs/google/adsense-1-result/)


