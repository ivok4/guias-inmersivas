import React from 'react';
import PropTypes from 'prop-types';

import { NavbarAbm } from '../../components';
import { ContainerBody } from './styled';

function Layout({ children, handleLogout }) {
  return (
    <ContainerBody>
      <NavbarAbm handleLogout={handleLogout}/>
      {children}
    </ContainerBody>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;