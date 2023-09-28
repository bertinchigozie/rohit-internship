import React from "react";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.background}>
      <div className="icons__box">
        <div className="icons__box-1">
          <p>Home icons</p>
          <p>Home</p>
        </div>
        <div className="icons__box">
          <p>Crash icons</p>
          <p>Crash</p>
        </div>
        <div className="icons__box">
          <p>Slots icons</p>
          <p>Slots</p>
        </div>
        <div className="icons__box">
          <p>Rouette icons</p>
          <p>Roulette</p>
        </div>
        <div className="icons__box">
          <p>Pinko icons</p>
          <p>Pinko</p>
        </div>
        <div className="icons__box">
          <p>Live casino icons</p>
          <p>Live casino</p>
        </div>
        <div className="icons__box">
          <p>Card icons</p>
          <p>Card</p>
        </div>
        <div className="icons__box">
          <p>Lottery icons</p>
          <p>Lottery</p>
        </div>
      </div>
      <div className="icons__box-2">
        <div className="icons__box">
          <p>Rewards icons</p>
          <p>Reward</p>
        </div>
        <div className="icons__box">
          <p>Help icons</p>
          <p>Help</p>
        </div>
        <div className="icons__box">
          <p>Contact icons</p>
          <p>Contact</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
