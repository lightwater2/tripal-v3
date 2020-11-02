import * as React from 'react';
import styled from 'styled-components';

export default () => (
  <Foot>
    <Copyright>
      ⓒTripal. All rights reserved
    </Copyright>
    <Menu>
      이용약관 | 개인정보취급방침
    </Menu>
    </Foot>
);
const Foot = styled.div`
  height: 200px;
  background-color: #6C766E;
`;
const Copyright = styled.div`
  font-size: 24px;
  padding-top: 120px;
  text-align:center;
  font-family: 'Poppins';
  font-weight: 300;
  color: white;
  line-height: 1.5;
`;
const Menu = styled.div`
  text-align:center;
  font-family: 'Poppins';
  font-weight: 300;
  color: white;
  line-height: 2;
`;