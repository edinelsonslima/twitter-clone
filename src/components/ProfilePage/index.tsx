import React from 'react'

import Feed from '../Feed'

import {
    Container,
    Banner,
    Avatar,
    ProfileData,
    LocationIcon,
    CakeIcon,
    Followage,
    EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
    return (
        <Container>
            <Banner>
                <Avatar />
            </Banner>
            <ProfileData>
                <EditButton outlined>Editar perfil</EditButton>
                <h1>Edinelson Lima</h1>
                <h2>@edinelsonslima</h2>

                <p>
                    {/*eslint-disable-next-line */}
                    Developed by <a href="https://github.com/edinelsonslima" target="_blank">@edinelsonslima</a>
                </p>

                <ul>
                    <li>
                        <LocationIcon />
                        Piaui, Brasil
                    </li>
                    <li>
                        <CakeIcon />
                        Nascido(a) em 22 de outubro de 1998
                    </li>
                </ul>

                <Followage>
                    <span>
                        seguindo <strong>82</strong>
                    </span>
                    <span>
                        <strong>205 </strong> seguidores
                    </span>

                </Followage>
            </ProfileData>

            <Feed/>
        </Container>
    );
}

export default ProfilePage;