import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const defaultCards = [
    {
      id: 1,
      path: "/img/1.png",
      matched: false,
    },
    {
      id: 2,
      path: "/img/2.png",
      matched: false,
    },
    {
      id: 3,
      path: "/img/3.png",
      matched: false,
    },
    {
      id: 4,
      path: "/img/4.png",
      matched: false,
    },
    {
      id: 5,
      path: "/img/5.png",
      matched: false,
    },
    {
      id: 6,
      path: "/img/6.png",
      matched: false,
    },
    {
      id: 7,
      path: "/img/7.png",
      matched: false,
    },
    {
      id: 8,
      path: "/img/8.png",
      matched: false,
    },
    {
      id: 9,
      path: "/img/9.png",
      matched: false,
    },
    {
      id: 10,
      path: "/img/10.png",
      matched: false,
    },
    {
      id: 11,
      path: "/img/11.png",
      matched: false,
    },
    {
      id: 12,
      path: "/img/12.png",
      matched: false,
    },
  ];

  const [cards, setCards] = useState([]);
  const [selectedOne, setSelectedOne] = useState(null);
  const [selectedTwo, setSelectedTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const prepareCards = () => {
    const sortedCards = [...defaultCards, ...defaultCards]
      .sort(() => 0.5 - Math.random())
      .map((cards) => ({ ...cards, id: Math.random() }));

    setCards(sortedCards);
    resetState();
  };

  const handleSelected = (cards) => {
    if (disabled) return true;
    selectedOne ? setSelectedTwo(cards) : setSelectedOne(cards);
  };

  useEffect(() => {
    prepareCards();
  }, []);

  useEffect(() => {
    if (selectedOne && selectedTwo) {
      setDisabled(true);

      if (selectedOne.path == selectedTwo.path) {
        setCards((prev) => {
          return prev.map((cards) => {
            if (cards.path == selectedOne.path) {
              return { ...cards, matched: true };
            } else {
              return cards;
            }
          });
        });
        resetState();
      } else {
        setTimeout(() => {
          resetState();
        }, 750);
      }
    }
  }, [selectedOne, selectedTwo]);

  const resetState = () => {
    setSelectedOne(null);
    setSelectedTwo(null);
    setDisabled(false);
  };

  return (
    <section className="flex flex-col items-center justify-center gap-8 mt-10">
      <h1 className="text-3xl font-semibold text-center">Tahmin Etme Oyunu</h1>
      <button
        className="bg-[#00ADB5] px-3 py-2 rounded hover:bg-[#08D9D6] hover:-translate-y-1 transition-all"
        onClick={() => prepareCards()}
      >
        Oyunu Başlat
      </button>

      <div className="grid grid-cols-6 gap-2 mt-5 ">
        {cards.map((cards, ind) => (
          <Card
            cards={cards}
            key={ind}
            handleSelected={handleSelected}
            rotated={cards == selectedOne || cards == selectedTwo || cards.matched}
            disabled={disabled}
          />
        ))}
      </div>
    </section>
  );
}

export default App;
