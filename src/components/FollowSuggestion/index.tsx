import React from 'react';

import { 
    Container,
    Avatar,
    Info,
    FollowButton,
} from './styles';

interface Props{
    name: string;
    nickname: string;
    perfil?: string;
}

const FollowSuggestion: React.FC<Props> = ({name, nickname, perfil}) => {
  return (
      <Container>
          <div>
              <Avatar>
                  <img src={perfil} alt="Perfil" />
              </Avatar>

              <Info>
                  <strong>{name}</strong>
                  <span>{nickname}</span>
              </Info>

          </div>
              <FollowButton outlined >Seguir</FollowButton>
      </Container>
  )
}

export default FollowSuggestion;