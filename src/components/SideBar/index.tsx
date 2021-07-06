import React from 'react';
import StickyBox from 'react-sticky-box';

import PerfilNaliceImg from '../../assets/perfilNalice.jpeg'
import PerfilwallisonImg from '../../assets/perfilWallison.jpeg'
import PerfilJcImg from '../../assets/perfilJc.jpeg'

import AotImg from '../../assets/aot.jpg'
import LisaImg from '../../assets/lisa.jpg'
import EspacoImg from '../../assets/espaco.jpg'

import List from '../List'
import News from '../News'
import FollowSuggestion from '../FollowSuggestion'

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="O que está acontecendo"
            elements={[
              <News assunto="Política • Assunto do momento " noticia="Bolsonaro diz que vai indicar André Mendonça para a vaga de Marco Aurélio Mello no STF" />,
              <News assunto="Tecnologia • Assunto do momento" noticia="Jeff Bezos deixa a Amazon nesta segunda-feira (5). Após 27 anos a frente do gigante do e-commerce, Bezos deve se dedicar a outros projetos, como na empresa de exploração espacial Blue Origin." />,
              <News assunto="Esporte • Assunto do momento " noticia="Jogadores que disputavam a Copa América retornam ao Flamengo para enfrentar o Galo" />,
              <News assunto="Tecnologia • Assunto do momento " noticia="Tik Tok" />,
            ]}
          />

          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestion
                perfil = {PerfilNaliceImg}
                name="Ana Alice Rios"
                nickname="@anaalicerios"
              />,

              <FollowSuggestion
                perfil = {PerfilwallisonImg}
                name="Wallison Franco"
                nickname="@_wfranco"
              />,

              <FollowSuggestion
                perfil = {PerfilJcImg}
                name="João Claudio"
                nickname="@jc_golzinho"
              />
            ]}
          />
           <List
            title="Tópicos para seguir"
            elements={[
              <FollowSuggestion
                perfil = {AotImg}
                name="Attack on Titan"
                nickname="Franquia de manga e anime"
              />,

              <FollowSuggestion
                perfil = {LisaImg}
                name="Lisa"
                nickname="K-pop"
              />,

              <FollowSuggestion
                perfil = {EspacoImg}
                name="Ciência"
                nickname="Espaço"
              />
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
}

export default SideBar;