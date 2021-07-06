import React from 'react';

import { 
    Container, 
    Topside,
    Logo,
    MenuButton,
    HomeIcon,
    BellIcon,
    EmailIcon,
    FavoriteIcon,
    ProfileIcon,
    Botside,
    Avatar,
    ProfileData,
    ExitIcon,
    TwitterIcon,
    ButtonTwitter,
} from './styles';

const MenuBar: React.FC = () => {
  return (
      <Container>
          <Topside>
              <Logo/>

              <MenuButton>
                  <HomeIcon/>
                  <span>Página Inicial</span>
              </MenuButton>
            
              <MenuButton>
                  <BellIcon/>
                  <span>Notificaçẽos</span>
              </MenuButton>

              <MenuButton>
                  <EmailIcon/>
                  <span>Mensagens</span>
              </MenuButton>

              <MenuButton>
                  <FavoriteIcon/>
                  <span>Favoritados</span>
              </MenuButton>

              <MenuButton className="active">
                  <ProfileIcon/>
                  <span>Perfil</span>
              </MenuButton>

              <ButtonTwitter>
                  <span>Tweetar</span>
                  <TwitterIcon/>
              </ButtonTwitter>

          </Topside>

          <Botside>
              <Avatar/>

              <ProfileData>
                  <strong>Edinelson Lima</strong>
                  <span>@edinelsonslima</span>
              </ProfileData> 
              <ExitIcon/>
          </Botside>
      </Container>
  );
}

export default MenuBar;