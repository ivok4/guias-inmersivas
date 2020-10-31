import React from 'react';
import PropTypes from 'prop-types';

import { NavbarAbm } from '../../components';
import { ContainerBody } from './styled';

function Layout({ children }) {
  return (
    <ContainerBody>
      <NavbarAbm />
      {children}
    </ContainerBody>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;