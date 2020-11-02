import * as React from 'react';
import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';

export default () => {
  
  return (
  <NavigationContainer>
    <GridContainer container justify="flex-start" alignItems="center" spacing={1}>
      <Title item lg={10}>TRIPAL</Title>
      <Menu item lg={1}>SERVICE</Menu>
      <Menu item lg={1}>CONTACT</Menu>
    </GridContainer>
  </NavigationContainer>
  )
};
const NavigationContainer = styled.div`
  width:100%;
  float:left;
  
  padding-top:36px;
  padding-left:140px;
  padding-right:140px;
`;
const Title = styled(Grid)`
  color: #707070;
  font-size: 60px;
  font-family: 'Poppins';
  font-weight: 500;
`;
const Menu = styled(Grid)`
  color:white;
  font-family: 'Poppins';
  font-weight: 300;
  font-size:25px;
  height:100%;
`;
const GridContainer = styled(Grid)`

`;