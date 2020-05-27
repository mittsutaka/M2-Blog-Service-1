---
title: "【2020年】Twitter APIの申請手順"
date: "2020-05-27T11:12:03.284Z"
description: "2020年現在のTwitterAPIの申請手順の紹介です。とりあえず申請方法が知りたい方向けの記事になります。英文で書かないといけないところが多くてめんどくさいですがこれを見れば迷うことなく申請できます。"
category: "Programing"
tags: "Programing,Twitter"
---
# 【2020年】Twitter APIの申請手順

![](https://paper-attachments.dropbox.com/s_CA8ACB90B215E66FFE95552D4E454090C8662E67392E6745081F343C1B3FDF3E_1590540157939_coffee-3080833_1920.jpg)

## はじめに

Twitterをやっている人が多いと思いますが、公式のアプリでは物足りなかったり、もっと見やすくしたい、検索を充実させたいとかあると思います。
私はTwitter最近始めたばかりなのでその辺の要求はありませんが、Twitterでつぶやかれている内容には非常に興味があります。
というのも私はプログラマであり将来は世間のニーズに合ったアプリケーションの開発やゲームの開発をしたいと考えていて、Twitterは世間の関心がよくわかるからリサーチツールとして最適である。インスタグラムもありますが、画像メインなので個人的にはTwitterの方が適切であると感じています。


## 対象読者
- とりあえずTwitterAPIの申請がしたい人


## 事前準備

Twitter APIの申請を行うにはTwitterのアカウントが必要なのでアカウントを準備してください


## 申請ＵＲＬへ遷移する

APIを使わせてもらうのにTwitterの許可（認証）が必要なので申請を行っていきます。
まず[こちらのURL](https://apps.twitter.com)にアクセスします。 
ログインしてなければログイン画面が出てくるのでユーザー名とパスワードを入力してログインをしてください。

するとこのような画面になります。


![アプリケーション登録](https://paper-attachments.dropbox.com/s_CA8ACB90B215E66FFE95552D4E454090C8662E67392E6745081F343C1B3FDF3E_1590499084843_image.png)

## アプリケーションの登録

次に右上の”Create an app”をクリックします。
言葉の通りTwitterAPIを使用するにはアプリケーションの登録が必要なので、登録をしていきます。といってもまだ無い場合が多いので仮のアプリケーション情報を入力していきます。


![アカウント同意画面](https://paper-attachments.dropbox.com/s_CA8ACB90B215E66FFE95552D4E454090C8662E67392E6745081F343C1B3FDF3E_1590499236039_image.png)


？？？

こういうときはgoogle翻訳に任せましょう

> 既存のアプリを引き続き管理できますが、新しいアプリを作成したり、TwitterプレミアムAPIを使用したりする場合は、開発者アカウントを申請してください。
> 
> 開発者プラットフォームとしての私たちの最初の責任は、ユーザーに対するものです。Twitterでの会話の健全性をサポートする場所を提供することです。 プラットフォームの誤用を防止するために、開発者向けにいくつかの新しい要件を導入しました。

・・・まあApplyでよいでしょう。Applyボタンしかないですし。


## 使用目的を選択する

Applyボタンをクリックするとこのような画面になります。
ここから対話型で色々聞かれるので適切に選択していきましょう。
最初の質問は
What is your primary reason for using Twitter developer tools?
Twitter developer tools（API含む） を使用する主な理由は？

![理由選択画面](https://paper-attachments.dropbox.com/s_CA8ACB90B215E66FFE95552D4E454090C8662E67392E6745081F343C1B3FDF3E_1590499390160_image.png)


今回はAPIを調べて使用をしたいので
Exploring the APIを選択して、右下のNextをクリックします。

![理由選択済み画面](https://paper-attachments.dropbox.com/s_CA8ACB90B215E66FFE95552D4E454090C8662E67392E6745081F343C1B3FDF3E_1590500035456_image.png)



## アカウント情報の確認

次に登録情報の確認といくつかの質問が出てくるので確認と回答の入力をしてNextボタンをクリックします。
ここでは↓

- What country do you live in
    -  私は日本在住なのでJapanを選択します
- What would you like us to call you
    - なんでもいいのでここではSampleと入力しています
![アカウント情報の入力](https://paper-attachments.dropbox.com/s_CA8ACB90B215E66FFE95552D4E454090C8662E67392E6745081F343C1B3FDF3E_1590500392089_image.png)

## 使用用途に関して詳細を入力する（英文）

ここからは結構めんどくさいですが、便利なAPIを使用させてくれるので我慢をして、英語で質問に回答をしていきます。
私は英語が得意ではないので日本語で文章を書いてgoogle翻訳でそのまま入力しました。


![入力画面](https://paper-attachments.dropbox.com/s_CA8ACB90B215E66FFE95552D4E454090C8662E67392E6745081F343C1B3FDF3E_1590500662653_image.png)


**①Twitter APIをどのように使用をしますか。なるべく詳細に書いてください。**
実際の英文はこう↓

> In English, please describe how you plan to use Twitter data and/or APIs. The more detailed the response, the easier it is to review and approve.

私の場合は、正直にこう書きました。
勉強のためTwitterAPIを使用して何ができるかを知りたいです。また、Twitter APIとReactとTypeScriptを使用して簡単なアプリケーションを作成したいと思っています。最終的にはTwitterからユーザーがどのようなことに関心があるかを分析したいと思っています。
↓訳す
I want to know what I can do with Twitter API for study. I also want to create a simple application using Twitter API and React and TypeScript. In the end, I'd like to analyze from Twitter what the user is interested in.

<br>

**②分析で使用しますか？**
①で分析すると書いているのでYesにします。
分析をしない場合はNoにすれば③を記述しなくてすみます。

<br>


**③分析方法を説明してください**
実際の英文はこう↓

> Please describe how you will analyze Twitter data including any analysis of Tweets or Twitter users.

私の場合は
最近Tweetしたハッシュタグをカウントしてユーザーがどんなことに今一番関心を持っているかを分析します。また、単語で分割してどんな単語が多くTweetしているかを分析します。
↓訳す
Analyze what your users are most interested in right now by counting the hashtags you have recently tweeted. Also, divide by words and analyze what kind of words are frequently tweeted.

<br>


**④Tweetやリツイート、いいね、フォロー、DM機能を使いますか？**

> Will your app use Tweet, Retweet, like, follow, or Direct Message functionality?

使わないのでNoにしました。

<br>


**⑤Tweetを表示したりしますか？**
Yesを選択しました。

<br>


**⑥Twitterの外部に表示する方法と場所を説明してください**

> Please describe how and where Tweets and/or data about Twitter content will be displayed outside of Twitter.

私の場合は
私のアウトプットブログの記事内、Twitter APIとReactとTypeScriptを使用した簡単なアプリケーションと共に紹介します。アプリケーションのトップ画面にTweetを表示する予定です。
訳す↓
In my post on my Output blog, I'll show you a Twitter API and a simple application that uses React and TypeScript. We plan to display Tweet on the top screen of the application.

<br>


**⑦Twitter情報を政府機関が利用できるようになりますか**
当然Noです。

ここまでで全て記述できたと思うのでNextをクリックします。


## 確認画面

するとこんな確認画面が出てくるのでLooks good!をクリックします。


![入力確認画面](https://paper-attachments.dropbox.com/s_CA8ACB90B215E66FFE95552D4E454090C8662E67392E6745081F343C1B3FDF3E_1590502029667_image.png)

## 同意画面

最後に同意画面が出てくるので読みたい人は読んで下部のチェックボックスをチェックして、Submit Applicationをクリックします。

![同意画面](https://paper-attachments.dropbox.com/s_CA8ACB90B215E66FFE95552D4E454090C8662E67392E6745081F343C1B3FDF3E_1590502118829_image.png)


送信完了
こんな画面が出てくると無事送信されていることがわかります。

![完了画面](https://paper-attachments.dropbox.com/s_CA8ACB90B215E66FFE95552D4E454090C8662E67392E6745081F343C1B3FDF3E_1590502241116_image.png)

## メールアドレスの確認

登録したメールアドレスに確認メールが飛んできているので黄色いボタンをクリックします。

![確認メール](https://paper-attachments.dropbox.com/s_CA8ACB90B215E66FFE95552D4E454090C8662E67392E6745081F343C1B3FDF3E_1590502355464_image.png)

## 申請完了

するとこんな画面に遷移しますのでこれで申請が完了です。

![](https://paper-attachments.dropbox.com/s_CA8ACB90B215E66FFE95552D4E454090C8662E67392E6745081F343C1B3FDF3E_1590502393390_image.png)

## まとめ

無事に申請が完了したかと思います。
個人的にAPIを使用するのにこれだけめんどくさいのは初めてかもしれないです。Twitter社のポリシーが伺えるところでありますが、悪用されているケースもあるので仕方がないのかなと思います。
どうやってこのAPIを使用していくかは申請時にも書きましたがReactとTypeScriptを使用して簡単なアプリケーションを作成するので別の記事で紹介します。

