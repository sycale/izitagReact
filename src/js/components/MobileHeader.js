import React, { Component, useState } from "react";
import MobileMenu from "./MobileMenuItem";
import Context from "./Context";

const nodes = [
  { id: "1" },

  {
    id: "2",
    expanded: [
      { id: "2.1" },
      {
        id: "2.2",
        expanded: [{ id: "2.2.1" }, { id: "2.2.2" }, { id: "2.2.3" }],
      },
      { id: "2.3" },
      {
        id: "2.4",
        expanded: [{ id: "2.4.1" }, { id: "2.4.2" }, { id: "2.4.3" }],
      },
      { id: "2.5" },
      { id: "2.6" },
    ],
  },

  { id: "3" },

  {
    id: "4",
    expanded: [{ id: "4.1" }, { id: "4.2" }],
  },

  { id: "5" },

  { id: "6" },
];

function MobileHeader() {
  const [menuOpened, toggle] = useState(false);
  const [displayChild, changeChild] = useState();
  const [openedSubMenu, openSubMenu] = useState(false);

  return (
    <>
      <div className="d-flex justify-content-end border-bottom pb-3 pt-3">
        {menuOpened && (
          <button
            className="header__mobile-menu-button"
            id="mobileBurgerClose"
            onClick={() => toggle(false)}
          >
            <img
              className="header__mobile-burger"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/OOjs_UI_icon_close.svg/600px-OOjs_UI_icon_close.svg.png"
              alt=""
            ></img>
          </button>
        )}
        {!menuOpened && (
          <button
            className="header__mobile-menu-button"
            id="mobileBurger"
            onClick={() => toggle(true)}
          >
            <img
              className="header__mobile-burger"
              src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png"
              alt=""
            ></img>
          </button>
        )}
      </div>
      {menuOpened && (
        <>
          {nodes.map((elem) => {
            return (
              <div className="ml-3">
                <div className="header__menu-item--controller" key={elem.id}>
                  <a href="#" className="header__menu-item-link">
                    Элемент {elem.id}
                  </a>
                  {elem.expanded && (
                    <>
                      {displayChild === elem.id && (
                        <button
                          id={elem.id}
                          onClick={(e) => {
                            openSubMenu(false);
                            changeChild(0);
                          }}
                          className="header__mobile-menu-button header__mobile-menu-close-sublist border-left"
                        >
                          <img
                            className="header__mobile-menu-arrow"
                            src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-512.png"
                          />
                        </button>
                      )}
                      {elem.id !== displayChild && (
                        <button
                          id={elem.id}
                          onClick={(e) => {
                            openSubMenu(true);
                            e.target.scrollIntoView();
                            console.log(e.target);
                            changeChild(e.target.id);
                          }}
                          className="header__mobile-menu-button header__mobile-menu-open-sublist border-left"
                        >
                          <img
                            id={elem.id}
                            className="header__mobile-menu-arrow"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Arrow-down.svg/800px-Arrow-down.svg.png"
                          />
                        </button>
                      )}
                    </>
                  )}
                </div>
                <>
                  {openedSubMenu &&
                    elem.id === displayChild &&
                    elem.expanded && (
                      <MobileMenu expandedMenu={elem.expanded} />
                    )}
                </>
              </div>
            );
          })}
        </>
      )}
    </>
  );
}

export default MobileHeader;
