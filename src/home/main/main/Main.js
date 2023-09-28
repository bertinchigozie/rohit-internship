import React from "react";
import styles from "./Main.module.css";
import Header from "../../header/Header";
import Card from "../card/Card";
import Carousel from "../carousel/Carousel";
import Chat from "../chat/Chat";
function Main() {
  return (
    <div className={styles.Main__box}>
      <div className="Main__1">
        <Header />
        <Carousel />
        <Card />
      </div>
      <div className="Main__2">
        <Chat />
      </div>
    </div>
  );
}

export default Main;
