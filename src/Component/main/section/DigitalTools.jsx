import React, { useState } from "react";
import data from "../../../data/PremiumCardData.json";

const DigitalTools = ({ onCardUpdate }) => {
  // console.log(data);
  let [activeId, setActiveId] = useState(1);
  let [Card, setCard] = useState([]);
  const handleStatus = (ID) => {
    let updatedCard;
    if (Card.includes(ID)) {
      updatedCard = Card.filter((id) => id != ID);
    } else {
      updatedCard = [...Card, ID];
    }
    setCard(updatedCard);
    onCardUpdate(updatedCard.length);
    // if (Card.includes(ID)) {
    //   setCard(Card.filter((id) => id != ID));
    // } else setCard([...Card, ID]);
  };
  const CardData = data.filter((item) => Card.includes(item.id));
  const cardTotalPrice = CardData.reduce((acc, item) => acc + item.price, 0);
  const handleClicked = (action) => {
    setActiveId(action);
  };
  return (
    <div className="my-12 container mx-auto">
      <div className="text-center space-y-3">
        <h2 className="text-4xl font-semibold text-gray-950">
          Premium Digital Tools
        </h2>
        <p className="text-gray-500 text-xl">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
        <div className="mb-8 flex justify-center items-center text-xl font-medium">
          <div className="w-60 flex items-center justify-center gap-3 bg-base-200 shadow-md rounded-full py-2">
            <button
              onClick={() => handleClicked(1)}
              className={`${activeId === 1 ? "bg-blue-500 text-white" : "text-gray-950"} px-4 cursor-pointer py-1 rounded-full `}
            >
              Products
            </button>
            <button
              onClick={() => handleClicked(2)}
              className={`${activeId === 2 ? "bg-blue-500 text-white" : "text-gray-950"} cursor-pointer px-4 py-1 rounded-full `}
            >
              Cart ({CardData.length})
            </button>
          </div>
        </div>
        <div className={`${activeId === 1 ? "" : "hidden"}`}>
          <div
            className={`grid grid-cols-1 lg:grid-cols-3   gap-5 ${activeId === 1 ? "" : "hidden"}`}
          >
            {data.map((item, index) => (
              <div
                key={index}
                className="relative rounded-lg  shadow-sm  text-center md:text-start transition-all duration-300 ease-in-out hover:translate-y-0.5 hover:shadow-md shadow-gray-500 p-8 pb-16 space-y-3 "
              >
                <div className="absolute top-3 right-3 bg-amber-200 text-amber-600 rounded-full px-3">
                  {item.tagType}
                </div>
                <div className="rounded-full text-4xl text-whtie bg-gray-50 border border-gray-300 flex justify-center items-center w-16 h-16">
                  <i className={item.icon}></i>
                </div>
                <h3 className="text-3xl text-gray-800 font-medium">
                  {item.name}
                </h3>
                <p className="text-lg text-gray-500">{item.description}</p>
                <div className="flex  text-center md:text-start text-2xl">
                  <span className="font-bold  text-center md:text-start">
                    ${item.price}
                  </span>
                  <span>/{item.period}</span>
                </div>
                {item.features.map((feature, index) => (
                  <div key={index}>
                    <i className="fa-regular fa-circle-check"></i> {feature}
                  </div>
                ))}
                <div className="absolute bottom-5 left-0  flex justify-center items-center w-full">
                  <button
                    onClick={() => handleStatus(item.id)}
                    className={`w-[80%] bg-linear-65 ${Card.includes(item.id) ? "from-emerald-600 to-green-400" : "from-[#4F39F6] to-[#9514FA]"} cursor-pointer h-10 text-white text-xl font-semibold rounded-full`}
                  >
                    {Card.includes(item.id) ? "Added to Cart" : "Buy Now"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`container mx-auto ${CardData.length === 0 ? "hidden" : ""} ${activeId === 2 ? "" : "hidden"}`}
        >
          <div className="card rounded-lg text-start shadow-sm p-4">
            <h3 className="text-2xl mb-4 font-semibold">Your Cart</h3>
            {CardData.map((item, index) => (
              <div
                key={index}
                className="rounded-md flex justify-between items-center p-3 px-4 hover:bg-gray-300"
              >
                <div className="flex justify-center items-center gap-3">
                  <div className="w-10 h-10 flex justify-center items-center rounded-full bg-gray-50 border border-gray-200 hover:border-white">
                    <i className={`${item.icon} text-xl`}></i>
                  </div>
                  <div className="text-start space-y-1">
                    <h4 className="text-xl font-semibold">{item.name}</h4>
                    <span>${item.price}</span>
                  </div>
                </div>
                <div className="text-red-600 cursor-pointer">
                  <button
                    className="cursor-pointer"
                    onClick={() => handleStatus(item.id)}
                  >
                    remove
                  </button>
                </div>
              </div>
            ))}
            <div className="flex justify-between items-center p-2">
              <span>Total:</span>
              <span className="text-xl font-semibold">${cardTotalPrice}</span>
            </div>
            <button onClick={() => handleStatus(0)} className="button my-3">
              <span>Proceed to Checkout</span>
            </button>
          </div>
        </div>
        <div
          className={`${CardData.length === 0 && activeId === 2 ? "" : "hidden"}`}
        >
          <div className="card rounded-lg text-start shadow-sm p-4">
            <h3 className="text-2xl mb-4 font-semibold">Your Cart</h3>
            <div className="flex justify-center items-center pb-5">
              <div className="text-center space-y-3">
                <div className="text-5xl text-gray-400">
                  <i class="fa-solid fa-cart-shopping"></i>
                </div>
                <p>your card is empty</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalTools;
