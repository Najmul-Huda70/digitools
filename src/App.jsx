import { useState } from "react";
import "./App.css";
import Footer from "./Component/Footer";
import Header from "./Component/header";
import Main from "./Component/main/main";

function App() {
  let [cardCount, setCardCount] = useState(0);
  const onCardCount = (count) => {
    setCardCount(count);
  };
  return (
    <>
      <Header length={cardCount}></Header>
      <Main onCardUpdate={onCardCount}></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
