import * as React from 'react';
import StyledGlobal from 'styled/global';

import Navigation from 'components/Navigation';
import Home from 'pages/Home';
import Footer from 'components/Footer';

export default () => (
  <>
    <StyledGlobal />
    <Navigation />
    <Home />
    <Footer />
  </>
);
