import React from 'react';

import { 
    Container,
    Retweeted,
    RocketseatIcon,
    Body,
    Avatar,
    Content,
    Header,
    Dot,
    Description,
    ImageContent,
    Icons,
    Status,
    CommentIcon,
    RetweetIcon,
    LikeIcon,
} from './styles';

const Tweet: React.FC = () => {
    return (
        <Container>
            <Retweeted>
                <RocketseatIcon />
                você retweetou
            </Retweeted>

            <Body>
                <Avatar />
                <Content>
                    <Header>
                        <strong>Edinelson Lima</strong>
                        <span>@edinelsonslima</span>
                        <Dot />
                        <time>5 de jul</time>
                    </Header>

                    <Description>Lorem Ipsum Dolor</Description>

                    <ImageContent />

                    <Icons>
                        <Status>
                            <CommentIcon />
                            18
                        </Status>

                        <Status>
                            <RetweetIcon />
                            18
                        </Status>

                        <Status>
                            <LikeIcon />
                            999
                        </Status>

                    </Icons>

                </Content>
            </Body>
        </Container>
    );
}

export default Tweet;