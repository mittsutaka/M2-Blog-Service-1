---
title: gatsby-imageでエラーが出る
date: "2020-04-17T01:12:03.284Z"
description: "Gatsby.jsとTypescriptを使っている本サイトを作成中に画像を表示させようとしたところエラーが出てかなり詰まったのでその原因と対処法に関してまとめます。"
category: "gatsby"
---

# gatsby-imageでエラーが出る

## はじめに

Gatsby.jsとTypescriptを使っている本サイトを作成中に画像を表示させようとしたところエラーが出てかなり詰まったのでその原因と対処法に関してまとめます。

## エラー内容

下記コードのfixedに対してエラーが出る。
```js
    <Img fixed={data.allFile.edges[2].node.childImageSharp.fixed} />
```
![](https://paper-attachments.dropbox.com/s_C296D179F85A37FEC685BD7D73AF5249529D29FE72BC36371E5EFC4AB3FDF8D2_1587085325819_image.png)


コンソールを見ても
```js
    Failed prop type: Invalid prop `fixed` supplied to `Image`.
```
![](https://paper-attachments.dropbox.com/s_C296D179F85A37FEC685BD7D73AF5249529D29FE72BC36371E5EFC4AB3FDF8D2_1587085724620_image.png)


とエラーが出ていることがわかる。


## 原因

完全にイージーなミスであったが、queryが間違っていた。

## 修正前のquery
```tsx
fixed(width: 300, height: 300) {
  base64
  tracedSVG
  aspectRatio
  srcWebp
  srcSetWebp
  originalName
}
```

## 対処方法

こちらのQAを参考にqueryを修正した

https://github.com/gatsbyjs/gatsby/issues/9882


[gatsbyjs/gatsby#9882](https://github.com/gatsbyjs/gatsby/issues/9882)


## 修正後のquery
```tsx
fixed(width: 300, height: 300) {
  base64
  width
  height
  src
  srcSet
  originalName
}
```
## 考察

最初のqueryはlocalhost:8000/___graphqlでfixedを押下したときに自動で出てくるもので、自動だからこれでいいだろうと思い込んでいた。
だがよく考えれば幅と高さを指定しているのにその値がないのは明らかにおかしい。


## まとめ

当たり前なことではあるがエラー内容をちゃんと見て対処をしなければならないと改めて思った。
あと、graphQLに関して理解が浅いのでもっと勉強しようと思う。


## コード全体

暫定的なコードで値をそのまま入れているところも多いがご容赦

```tsx
    const IndexPage: React.FC<Props> = ({ data }) => {
      return (
        <Layout>
          <Img fixed={data.allFile.edges[2].node.childImageSharp.fixed} />
          <Label labelName="New Posts" />
          <Section>
            <Card blogTitle="Gatsbyを使ってみた.かなりいい感じである" link="/blogs/gatsby/first" />
            <Card blogTitle="index" link="/blogs/game/first" />
          </Section>
          <Label labelName="Pick Up" />
          <Section>
            <Card blogTitle="Gatsbyを使ってみた.かなりいい感じである" link="/blogs/gatsby/first" />
            <Card blogTitle="index" link="/blogs/game/first" />
          </Section>
        </Layout>
      )
    }
    export default IndexPage;
    export const query = graphql`
    query IndexTest{
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
              date
              description
            }
            html
          }
        }
      }
      allFile {
        edges {
          node {
            id
            childImageSharp {
              id
              fixed(width: 300, height: 300) {
                base64
                tracedSVG
                aspectRatio
                srcWebp
                srcSetWebp
                originalName
              }
            }
          }
        }
      }
    }
    `
```
