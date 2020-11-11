import React from "react";

import HeaderLayout from "./HeaderLayout";
import HeaderSaturate from "./HeaderSaturate";

const Footer = () => {
  return (
    <>
      <HeaderSaturate />
      <HeaderLayout>
        <div className="header__header-left">
          <span className="header__header-left-eg">Ethics Gradient</span>
        </div>
        <div className="header__header-right">i</div>
      </HeaderLayout>
    </>
  );
}

export default Footer;
