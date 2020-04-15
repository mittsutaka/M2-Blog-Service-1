import * as React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

const contents = css({
    P: {
        marginTop: 40,
    }
})

interface Props {
    blogTitle: string,
    description: string,
    html: string
}

const Blog: React.FC<Props> = (props) => {
    return (
        <div>
            <h1>{props.blogTitle}</h1>
            <p>{props.description}</p>
            <div css={contents} dangerouslySetInnerHTML={{ __html: props.html }}></div>
        </div>
    )
}

export default Blog;