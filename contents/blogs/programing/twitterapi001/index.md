---
title: "【2020年】Twitter APIの申請手順"
date: "2020-05-27T11:12:03.284Z"
description: "2020年現在のTwitterAPIの申請手順の紹介です。とりあえず申請方法が知りたい方向けの記事になります。英文で書かないといけないところが多くてめんどくさいですがこれを見れば迷うことなく申請できます。"
category: "Programing"
tags: "Programing,Twitter"
---

# 【2020年】Twitter APIの申請手順

![TOP画像](https://paper-attachments.dropbox.com/s_CA8ACB90B215E66FFE95552D4E454090C8662E67392E6745081F343C1B3FDF3E_1590540157939_coffee-3080833_1920.jpg)

## はじめに

Twitterをやっている人が多いと思いますが、公式のアプリでは物足りなかったり、もっと見やすくしたい、検索を充実させたいとかあると思います。
私はTwitter最近始めたばかりなのでその辺の要求はありませんが、Twitterでつぶやかれている内容には非常に興味があります。
というのも私はプログラマであり将来は世間のニーズに合ったアプリケーションの開発やゲームの開発をしたいと考えていて、Twitterは世間の関心がよくわかるからリサーチツールとして最適である。インスタグラムもありますが、画像メインなので個人的にはTwitterの方が適切であると感じています。


## 対象読者
- とりあえずTwitterAPIの申請がしたい人
- 一刻も早くTwitterAPIを使用したい人


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
アプリケーションを登録していくと思いきや。。。こんな表示が



![アカウント同意画面](https://paper-attachments.dropbox.com/s_CA8ACB90B215E66FFE95552D4E454090C8662E67392E6745081F343C1B3FDF3E_1590499236039_image.png)


？？？

こういうときはgoogle翻訳に任せましょう

> 既存のアプリを引き続き管理できますが、新しいアプリを作成したり、TwitterプレミアムAPIを使用したりする場合は、開発者アカウントを申請してください。
> 
> 開発者プラットフォームとしての私たちの最初の責任は、ユーザーに対するものです。Twitterでの会話の健全性をサポートする場所を提供することです。 プラットフォームの誤用を防止するために、開発者向けにいくつかの新しい要件を導入しました。

Twitter APIを使用するには開発者アカウントの申請が必要なのでまずそれをしてくださいということです。
のでApplyを押しましょう。Applyボタンしかないですし。

ここからdeveloper Accountの申請を行ってきます。

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

<br>

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

## developer Accountの登録完了

するとこんな画面に遷移しますのでこれでdeveloper accountの登録が完了です。

![登録完了画面](https://paper-attachments.dropbox.com/s_CA8ACB90B215E66FFE95552D4E454090C8662E67392E6745081F343C1B3FDF3E_1590502393390_image.png)

## アプリケーションの登録

それでは無事にdeveloper accountが登録できたのでアプリケーションの登録をしていきます。
言葉の通りTwitterAPIを使用するにはアプリケーションの登録が必要なので、登録をしていきます。といってもまだ無い場合が多いので仮のアプリケーション情報を入力していきます。

<br>

まず真ん中のCreate an appをクリックします。

![Create an app](https://paper-attachments.dropbox.com/s_CA8ACB90B215E66FFE95552D4E454090C8662E67392E6745081F343C1B3FDF3E_1590568809861_image.png)


右上のCreate an appをクリックします。

![Create an app2](https://paper-attachments.dropbox.com/s_CA8ACB90B215E66FFE95552D4E454090C8662E67392E6745081F343C1B3FDF3E_1590568960415_image.png)


するとアプリケーションの情報を入力する画面になるので入力していきます。
必須以外は入力しなくてもよいです。


![アプリケーション入力画面①](https://paper-attachments.dropbox.com/s_CA8ACB90B215E66FFE95552D4E454090C8662E67392E6745081F343C1B3FDF3E_1590570120736_image.png)


**①アプリケーションの名前は？**
これはユニークな名前でないといけないので注意してください
私の場合は
SampleApp12345678
としました。

<br>

**②アプリケーションの概要は？**
私の場合は
twitterの情報を期間で検索をかけ、頻出単語のランキングやハッシュタグのランキングを表示します。
訳す↓
Search twitter information by period and display the ranking of frequently used words and the ranking of hashtags.

<br>

**③Website URLは？**
私の場合はこのサイトのURLを入力しました。
なんでもいいです。試してませんがおそらく適当な文字列でも。

https://m2-gaming.com/



![アプリケーション入力画面②](https://paper-attachments.dropbox.com/s_CA8ACB90B215E66FFE95552D4E454090C8662E67392E6745081F343C1B3FDF3E_1590569777113_image.png)


**④アプリの使い方は？**
私の場合は
期間を入力して検索をクリックすると単語の頻出数やハッシュタグの頻出数でランキング表示されます。また、通常のtweetも表示されます。リアルタイムではなく、更新ボタンを押して更新させます。
訳す↓
If you enter a period and click Search, it will be ranked according to the number of words and the number of hashtags. You will also see a regular tweet. Press the update button to update it, not in real time.

<br>

ここまで入力したらCreateをクリックします。
するとこんな画面が表示されるのでよーく読んで、Createをクリックします。
ちなみになんて書いてあるかというと。

- ユーザーに関する機密データの取り扱いは注意してください
- 監視目的の使用は禁止です
- 自動化する場合はガイドラインをよく読んでください

悪用しないことを胸に誓ってクリックしましょう


![注意画面](https://paper-attachments.dropbox.com/s_CA8ACB90B215E66FFE95552D4E454090C8662E67392E6745081F343C1B3FDF3E_1590569760711_image.png)

## 登録完了

このような画面になれば登録完了です。

![登録完了](https://paper-attachments.dropbox.com/s_CA8ACB90B215E66FFE95552D4E454090C8662E67392E6745081F343C1B3FDF3E_1590570162748_image.png)


APIkeyは上部のタブのKeys and tokensに切り替えると確認できます。
これで申請から登録まで完了です。
このAPIkeyを使ってアプリやサイトを作成しましょう。

![API key](https://paper-attachments.dropbox.com/s_CA8ACB90B215E66FFE95552D4E454090C8662E67392E6745081F343C1B3FDF3E_1590570247989_image.png)

## まとめ

以上でTwitter APIが使用できるようになりました。
個人的にAPIを使用するのにこれだけめんどくさいのは初めてかもしれないです。Twitter社のポリシーが伺えるところでありますが、悪用されているケースもあるので仕方がないのかなと思います。
どうやってこのAPIを使用していくかは申請時にも書きましたがReactとTypeScriptを使用して簡単なアプリケーションを作成するので別の記事で紹介します。


