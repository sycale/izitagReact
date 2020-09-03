import React, { Component } from "react";
import DesktopMenu from './DesktopMenu';
import MobileHeader from './MobileHeader';

function CustomMenu() {
  return screen.width < 768 ? <MobileHeader /> : <DesktopMenu />;
}

class Menu extends Component {
  constructor() {
    super();
  }

  render() {
    return <CustomMenu />;
  }
}

export default Menu;
