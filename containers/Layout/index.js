import React from 'react';
import PropTypes from 'prop-types';

import { Navbar } from '../../components';
import { ContainerBody } from './styles';

function Layout({ children }) {
  return (
    <ContainerBody>
      <Navbar />
      {children}
      {/* <Footer isHome={isHome} /> */}
    </ContainerBody>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;