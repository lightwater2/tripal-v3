import * as React from 'react';
import styled from 'styled-components';
import { FullSizeBanner } from 'styled/components';
const titleImage = require('assets/titleImage.jpg').default;
export default () => (
  <>
    <FullSizeBanner img={titleImage} height={1279} width={1920}>
      TRIP WITH PALS, TOGETHER WITH PALS
      <br />
      THAT'S TRIPAL!
    </FullSizeBanner>
  </>
);
