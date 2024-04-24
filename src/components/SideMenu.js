import React from "react";
import MenuLinks from "./MenuLinks";
import Logo from "./Logo";
import Search from "./Search";
function SideMenu() {
  return (
    <aside className="side-bar open">{/* What components go here? */}
     <Logo/>
     <MenuLinks/>
     <Search/>
      </aside>
  );
}

export default SideMenu;
