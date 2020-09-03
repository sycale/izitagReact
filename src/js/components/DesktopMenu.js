import React, { Component } from "react";
import SubMenu from './SubMenu';

class DesktopMenu extends Component {
  constructor() {
    super();

    this.menuItems = [];

    for (let i = 0; i < 6; i += 1) {
      if (i + 1 === 2 || i + 1 === 4) {
        this.menuItems.push(
          <div className="header__menu-item header__menu-item--desktop">
            <a data-index={i + 1} href="#">
              Элемент {i + 1}
            </a>
            <SubMenu item={i + 1} />
          </div>
        );
      } else {
        this.menuItems.push(
          <div className="header__menu-item header__menu-item--desktop">
            <a data-index={i + 1} href="#">
              Элемент {i + 1}
            </a>
          </div>
        );
      }
    }
  }
  render() {
    return (
      <>
        <div className="header__menu">
          {this.menuItems.map((elem, index) => {
            return (
              <div
                className="header__menu-item-link"
                data-index={index}
                key={index + 1}
              >
                {elem}
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default DesktopMenu;
