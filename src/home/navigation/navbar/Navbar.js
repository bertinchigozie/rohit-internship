import React from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.background}>
      <div className="Toggle__btn">
        <div className="Toggle__btn-a">
          <div className="Toggle__btn-content">
            <img src="" alt="" className="i_img" />
            <p>Casino</p>
          </div>
        </div>
        <div className="Toggle__btn-b">
          <div className="Toggle__btn-content">
            <img src="" alt="" className="i_img" />
            <p>Sports</p>
          </div>
        </div>
      </div>
      <div className="Search__box">
        <input type="search" name="" id="" />
        <img src="" alt="" className="i_img" />
      </div>
      <div className="Nav__logo">
        <img src="" alt="" className="logo" />
        <h2>WAXCASINO</h2>
        <p>BY OWLOAD</p>
      </div>
      <div className="Profile__box">
        <div className="Profile__details">
          <div className="Icons">
            <p className="i_img">bell</p>
          </div>
          <div className="inbox">
            <p>inbox</p>
          </div>
          <div className="Timer__box">
            <div className="Icons">
              <p className="i_img">timer</p>
            </div>
            <p>723500</p>
            <div className="inbox">
              <p>plus</p>
            </div>
          </div>
        </div>
        <div className="Profile">
          <img src="" alt="" className="profile__img" />
          <p>*</p>
        </div>
      </div>
    </div>
  );
}
