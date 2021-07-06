import React from 'react';

import { Container } from './styles';

interface Props{
  assunto: string;
  noticia: string;
}

const News: React.FC<Props> = ({assunto, noticia}) => {
  return (
      <Container>
          <span>{assunto}</span>
          <strong>{noticia}</strong>
      </Container>
  );
}

export default News;