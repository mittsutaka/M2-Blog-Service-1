---
title: graphQLのプロパティに名前を付ける
date: "2020-04-17T02:12:03.284Z"
description: "queryを書くときにそのままのallFileとかallMarkdownRemarkとかデフォルトの名前を使ってもいいが、複数検索したいときや名前をもっとわかりやすいプロパティにしたかった。"
category: "gatsby"
---

# はじめに

queryを書くときにそのままのallFileとかallMarkdownRemarkとかデフォルトの名前を使ってもいいが、複数検索したいときや名前をもっとわかりやすいプロパティにしたかった。

# デフォルトのまま使った書き方
    query IndexTest{
      allMarkdownRemark {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              date
              description
              category
            }
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


# 名前を付ける書き方

基本的に”名前”：プロパティ名{}でいける。
mdFilesという名前を付ける場合↓

    mdFiles : allMarkdownRemark {
      ***
    }


    query IndexTest{
      mdFiles:allMarkdownRemark {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              date
              description
            }
          }
        }
      }
      logoFiles:allFile {
        edges {
          node {
            id
            childImageSharp {
              id
              fixed(width: 300, height: 300) {
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


# まとめ

すごく簡単でGraphQLの良さがだんだんとわかってきた。

