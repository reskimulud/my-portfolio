import React from 'react';
import styled from 'styled-components';

export function Container({ children }) {
  const Container = styled.div`
    max-width: 1140px;
    margin: auto;
  `
  return <Container>{children}</Container>
}

export function Row({ children }) {
  const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
  `
  return <Row>{children}</Row>
}
