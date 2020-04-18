---
title: "Netlifyでフォームを作成する"
date: "2020-04-18T01:12:03.284Z"
description: "ブログサイトに必須である問い合わせフォームをNetrifyの機能を使って作成する"
category: "Netlify"
---


# Netlifyでフォームを作成する

## はじめに

ブログサイトに必須である問い合わせフォームをNetrifyの機能を使って作成する
今回は公式ドキュメントを見ながら実装していく

https://docs.netlify.com/forms/setup/#html-forms



## Netlifyフォームの概要

Netlifyにはフォーム処理が元から組み込まれていて、デプロイ時にHTMLファイルを直接解析することで、他のAPI呼び出しやサイトに追加のJavaScriptを組み込んだりする必要がないので簡単に実装ができる


## 実装

実装も非常に簡単でformタグにnetlify属性を入れるか、data-netlify=”true”としてやるかだけでよい。

```tsx
<form name="contact" method="POST" data-netlify="true">
    ***中身***
</form>
```

```tsx
<form name="contact" method="POST" netlify>
    ***中身***
</form>
```

と公式ドキュメントには書いてあるがそのままやると下のようなエラー（?）が出る。

![](https://paper-attachments.dropbox.com/s_7EDA8B45153C2C700E2F73B690C3F6359551A38A465DB450B74EF0CA587086A8_1587177044301_image.png)


これは普通のサイトならNetlifyが自動的に

```tsx
<input type="hidden" name="form-name" value="contact" />
```
を挿入してくれるのだがGatsbyのような静的サイトジェネレータでは手動で入れてやらなければならない。ここのvalueとformのnameは合わせる必要があるので注意。
改めて下記コードで送信をしてみる

```tsx
<form name="contact" method="POST" data-netlify="true">
    <input type="hidden" name="form-name" value="contact" />
    ***中身***
</form>
```
    

するとこのようなデフォルトの画面が出て成功できたことがわかる。
あとはNetlifyのサイトにいけば送信された情報が届いている。

![](https://paper-attachments.dropbox.com/s_7EDA8B45153C2C700E2F73B690C3F6359551A38A465DB450B74EF0CA587086A8_1587177189779_image.png)

## ファイルアップロード

ファイルアップロードする場合もtype=”file”をフォームタグに入れてやるだけでいい
```tsx
<form name="contact" method="POST" netlify type="file">
    ***中身***
</form>
```

## 本サイトへの実装コード

上記を踏まえて本サイトでも問い合わせフォームを下記のように作成した。
おかしなところがあったら是非問い合わせフォームより指摘をお願いします。

デザインはこんな感じ
![](https://paper.dropbox.com/ep/redirect/image?url=https%3A%2F%2Fpaper-attachments.dropbox.com%2Fs_7EDA8B45153C2C700E2F73B690C3F6359551A38A465DB450B74EF0CA587086A8_1587178157002_image.png&hmac=BxXyMN53qJIeKoU9F5IthXnwYUJiR9%2Bvnm0sz9ltj8E%3D&width=1490)

```tsx:title=Form.tsx
import * as React from "react";
import styled from "@emotion/styled";
interface IFormBlockProps {
    name: string,
    type: string,
    label: string,
}
const FlexColumn = styled.div({
    display: "flex",
    flexDirection: "column",
    justifyContent: "left",
    marginBottom: 20
})
const InputBox = styled.input({
    border: "1px solid darkgray",
    borderRadius: 5,
    backgroundColor: "#fff",
    lineHeight: 2,
    outline: "none",
    padding: "0 5px"
})
const FormTextArea = styled.textarea({
    border: "1px solid darkgray",
    borderRadius: 5,
    backgroundColor: "#fff",
    resize: "none",
    height: 150,
    outline: "none",
    padding: "0 5px"
})
const FormLabel = styled.label({
    fontFamily: "Vollkorn , serif",
    fontSize: 18
})
const FormBlock = (props: IFormBlockProps) => {
    return (
        <FlexColumn>
            <FormLabel>{props.label}</FormLabel>
            <InputBox type={props.type} name={props.name}></InputBox>
        </FlexColumn>
    )
}
const SendButton = styled.button({
    backgroundColor: "#333",
    color: "#fff",
    padding: "5px 50px",
    borderRadius: 5
})
const Wrapper = styled.div({
    margin: "auto",
    maxWidth: 600
})
const Form = () => {
    return (
        <Wrapper>
            <form name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <FormBlock label="Name" type="text" name="name" />
                <FormBlock label="Email" type="email" name="email" />
                <FlexColumn>
                    <FormLabel>Message</FormLabel>
                    <FormTextArea name="message"></FormTextArea>
                </FlexColumn>
                <SendButton type="submit">Send</SendButton>
            </form>
        </Wrapper>
    )
}
export default Form;
```

## まとめ

ホスティングサービスにNetlifyを使用してよかった。とても簡単。ありがとう。


参考資料

https://qiita.com/NaokiIshimura/items/bce2f0b865ec1bc16a53


