import * as React from 'react';
import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';

export default () => {
  
  return (
  <NavigationContainer>
    <GridContainer container justify="flex-start" alignItems="center" spacing={1}>
      <Title item xs={6} sm={9} md={9} lg={10} xl={10}>TRIPAL</Title>
      <Menu item xs={3} sm={2} md={2} lg xl>SERVICE</Menu>
      <Menu item xs={3} sm={1} md={1} lg={1} xl>CONTACT</Menu>
    </GridContainer>
  </NavigationContainer>
  )
};
const NavigationContainer = styled.div`
  width:100%;
  float:left;
  padding-top:36px;
  padding-left:7.292vw;
  padding-right:7.292vw;
`;
const Title = styled(Grid)`
  color: #707070;
  font-size: calc(2.605vw + 10px);
  font-family: 'Poppins';
  font-weight: 500;
`;
const Menu = styled(Grid)`
  color:white;
  font-family: 'Poppins';
  font-weight: 300;
  font-size: calc(0.782vw + 10px);
  height:100%;
`;
const GridContainer = styled(Grid)`

`;