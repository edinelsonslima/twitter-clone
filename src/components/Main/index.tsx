import React from 'react';
import ProfilePage from '../ProfilePage'

import { 
    Container, 
    Header, 
    BackIcon, 
    ProfileInfo, 
    BottomMenu, 
    HomeIcon, 
    SearchIcon, 
    BellIcon, 
    EmailIcon } from './styles';

const Main: React.FC = () => {
    return (
        <Container>
            <Header>
                <button>
                    <BackIcon></BackIcon>
                </button>

                <ProfileInfo>
                    <strong>Edinelson Lima</strong>
                    <span>852 Tweets</span>
                </ProfileInfo>
            </Header>

            <ProfilePage></ProfilePage>
            
            <BottomMenu>
                <HomeIcon className="active"></HomeIcon>
                <SearchIcon></SearchIcon>
                <BellIcon></BellIcon>
                <EmailIcon></EmailIcon>
            </BottomMenu>
        </Container>
    );
}

export default Main;