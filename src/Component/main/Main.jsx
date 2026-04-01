import React from "react";
import Supercharge from "./section/Supercharge";
import PremiumTools from "./section/PremiumTools";
import DigitalTools from "./section/DigitalTools";
import Steps from "../main/section/Steps3";
import Simple from "../main/section/Simple";
const Main = ({ onCardUpdate }) => {
  return (
    <>
      <Supercharge></Supercharge>
      <PremiumTools></PremiumTools>
      <DigitalTools onCardUpdate={onCardUpdate}></DigitalTools>
      <Steps></Steps>
      <Simple></Simple>
    </>
  );
};

export default Main;
