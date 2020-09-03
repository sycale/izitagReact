import React, { Component, useState } from "react";

function MobileMenu(props) {
  const [menuOpened, toggle] = useState(false);
  const [displayChild, changeChild] = useState();
  const [openedSubMenu, openSubMenu] = useState(false);

  return (
    <>
      {props.expandedMenu.map((elem) => {
        return (
          <div className="ml-3">
            <div
              className="header__menu-item--controller header__menu-item--deep"
              key={elem.id}
            >
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
            {openedSubMenu && elem.id === displayChild && elem.expanded && (
              <MobileMenu expandedMenu={elem.expanded} />
            )}
          </div>
        );
      })}
    </>
  );
}

export default MobileMenu;
