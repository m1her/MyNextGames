"use client";
import { useState, useEffect } from "react";
import Card from "src/components/Card/index.js";

const cardsValues = [
  { src: "/BlueBird.png", color: "bg-[#031423]", matched: false },
  { src: "/Dragon.png", color: "bg-[#042c05]", matched: false },
  { src: "/Phoenix.png", color: "bg-[#95440e]", matched: false },
  { src: "/WereWolf.png", color: "bg-[#0b052f]", matched: false },
  { src: "/Minotaur.png", color: "bg-[#3a0505]", matched: false },
  { src: "/BlueWolf.png", color: "bg-[#030112]", matched: false },
];

export default function Home() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [firstChoice, setFirstChoice] = useState(null);
  const [secondCoice, setSecondCoice] = useState(null);
  const [disabled, setDisabled] = useState(false);

  //shuffle cards to a random order
  const shuffleCars = () => {
    const newCards = [...cardsValues, ...cardsValues]
      .sort(() => Math.random() - 0.6)
      .map((card) => ({ ...card, id: Math.random() }));
    setFirstChoice(null);
    setSecondCoice(null);
    setCards(newCards);
    setTurns(0);
  };

  //handle choices
  const handleChoice = (card) => {
    firstChoice ? setSecondCoice(card) : setFirstChoice(card);
  };

  //reset choices and turns increases
  const resetHandler = () => {
    setFirstChoice(null);
    setSecondCoice(null);
    setTurns((pervTurns) => pervTurns + 1);
    setDisabled(false);
  };

  useEffect(() => {
    if (firstChoice && secondCoice) {
      setDisabled(true);
      if (firstChoice.src === secondCoice.src) {
        setCards((prvCards) => {
          return prvCards.map((card) => {
            if (card.src === firstChoice.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetHandler();
      } else {
        setTimeout(() => {
          resetHandler();
        }, 1000);
      }
    }
    console.log(cards);
  }, [firstChoice, secondCoice]);

  useEffect(() => {
    shuffleCars();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 bg-[#0a020e]">
      <div className="text-center">
        <h1 className="text-white font-semibold text-3xl font-mono">
          Mythical Match
        </h1>
        <button
          className="font-mono border-2 border-white text-white p-2 w-28 mt-3 hover:bg-[#020000] hover:shadow-white hover:shadow hover:mt-3 hover:mb-1"
          onClick={shuffleCars}
        >
          New Game
        </button>

        <div className="grid md:grid-cols-4 mt-4 gap-2">
          {cards?.map((card) => (
            <div key={card.id}>
              <Card
                color={card.color}
                image={card.src}
                card={card}
                handleChoice={handleChoice}
                flipped={
                  card === firstChoice || card === secondCoice || card.matched
                }
                disabled={disabled}
              />
            </div>
          ))}
        </div>
      </div>
      <p className="text-white font-mono mt-3 font-semibold text-lg">Turns: {turns}</p>
    </main>
  );
}
