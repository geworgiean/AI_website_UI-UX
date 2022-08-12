import React from "react";
import "./Brand.css";
import { google, slack, dropbox, atlassian, shopify } from "./Imports";

const brand = () => {
  return (
    <div className="gpt3__brand" section__padding>
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={slack} alt="slack" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox" />
      </div>
      <div>
        <img src={atlassian} alt="atlassian" />
      </div>
      <div>
        <img src={shopify} alt="shopify" />
      </div>
    </div>
  );
};

export default brand;