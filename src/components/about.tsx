import * as React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div({
    width: "50%",
    "@media (max-width: 800px)": {
        width: "100%"
    }
})

const Label = styled.label({
    fontWeight:"bold",
})

const TextArea = styled.div({
    marginBottom: 30,
    padding: "2px 20px 0 0px",
    "@media (max-width: 600px)":{
        p:{
            fontSize:"14px"
        }
    }
})

const About = () => {
    return (
        <Wrapper id="about">
            <Label>管理者</Label>
            <TextArea>
                <p>愛知県在住。プログラマ歴2年目。自動車部品メーカーにて5年程従事した後に、新規一転プログラマの道へ。</p>
                <p>現在はベンチャー企業でシステム開発を行っている。メインの使用言語はC#。フロントもJQueryでやっているがReactへの移行を考えている。
                短期目標はプログラミング知識を身に着けて自分一人でサービス開発をする、その後中期目標として5年後までにはゲーム開発会社を起業する。
                長期目標は楽しく、楽して人生を送りたい。プログラミングは大好き。</p>
                <p>仕事、質問、指摘どんなことでも嬉しいのでコンタクトから連絡いただけるとありがたいです。</p>
            </TextArea>
            <Label>サイト構成</Label>
            <TextArea>
                <p>Gatsby.js + TypeScript + Netlify</p>
            </TextArea>
        </Wrapper>
    )
}

export default About;