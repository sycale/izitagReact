import React, { Component } from "react";

function SecondSubMenu() {
  return (
    <>
      <div className="header__submenu">
        <div className="header__submenu-item">
          <a href="#" className="header__submenu-item-link p-0">
            Элемент 2.1
          </a>
        </div>
        <div
          className="header__submenu-item mr-3 ml-3 d-flex flex-column"
          id="menuItem"
        >
          <a href="google.com" className="header__submenu-item-link p-0">
            Элемент 2.2
          </a>
          <ul className="mt-3 m-0 p-0">
            <li>
              <a href="#">Элемент 2.2.1</a>
            </li>
            <li>
              <a href="#">Элемент 2.2.2</a>
            </li>
            <li>
              <a href="#">Элемент 2.2.3</a>
            </li>
          </ul>
        </div>
        <div className="header__submenu-item mr-3 ml-3" id="menuItem">
          <a href="#" className="header__submenu-item-link p-0">
            Элемент 2.3
          </a>
        </div>
        <div
          className="header__submenu-item mr-3 ml-3 d-flex flex-column"
          id="menuItem"
        >
          <a href="#" className="header__submenu-item-link p-0">
            Элемент 2.4
          </a>
          <ul className="m-0 mt-3 p-0">
            <li>
              <a href="#">Элемент 2.4.1</a>
            </li>
            <li>
              <a href="#">Элемент 2.4.2</a>
            </li>
            <li>
              <a href="#">Элемент 2.4.3</a>
            </li>
            <li>
              <a href="#">Элемент 2.4.4</a>
            </li>
            <li>
              <a href="#">Элемент 2.4.5</a>
            </li>
            <li>
              <a href="#">Элемент 2.4.6</a>
            </li>
            <li>
              <a href="#">Элемент 2.4.7</a>
            </li>
          </ul>
        </div>
        <div class="header__submenu-item mr-3 ml-3" id="menuItem">
          <a href="#" class="header__submenu-item-link p-0">
            Элемент 2.5
          </a>
        </div>
        <div class="header__submenu-item mr-3 ml-3" id="menuItem">
          <a href="#" class="header__submenu-item-link p-0">
            Элемент 2.6
          </a>
        </div>
      </div>
    </>
  );
}

function FourthSubMenu() {
  return (
    <div className="header__submenu header__submenu--custom">
      <div className="header__submenu-item header__submenu-item--custom" id="menuItem">
        <a href="#" className="header__submenu-item-link">
          Элемент 4.1
        </a>
      </div>
      <div className="header__submenu-item header__submenu-item--custom" id="menuItem">
        <a href="#" className="header__submenu-item-link">
          Элемент 4.2
        </a>
      </div>
    </div>
  );
}

function CustomSubMenu(props) {
  const item = props.item;
  return item === 2 ? <SecondSubMenu /> : <FourthSubMenu />;
}

class SubMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItem: props.item,
    };
  }

  render() {
    return <CustomSubMenu item={this.state.activeItem} />;
  }
}

export default SubMenu;
