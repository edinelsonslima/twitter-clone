import React from 'react';

import Tweet from '../Tweet'

import { Container,Navbar, Tab, Tweets } from './styles';

const Feed: React.FC = () => {
    return (
        <Container>
            <Navbar>
                <Tab className="active" >Tweets</Tab>
                <Tab>Tweets e respostas</Tab>
                <Tab>Mídia</Tab>
                <Tab>Curtidas</Tab>
            </Navbar>

            {
                <Tweets>
                    <Tweet />
                    <Tweet />
                    <Tweet />
                    <Tweet />
                    <Tweet />
                </Tweets>
            }
        </Container>
    )
}

export default Feed;