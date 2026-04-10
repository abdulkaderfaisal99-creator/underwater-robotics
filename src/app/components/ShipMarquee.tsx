import React from "react";
import submarineIcon from "../../assets/95f1c4dd0e99f3c57ef77f85e62edd0c412aa66a.png";

const ShipMarquee = ({
  backgroundColor = "bg-blue-100",
}: {
  backgroundColor?: string;
}) => {
  // Ship, submarine, and robot/gear emojis for continuous scrolling
  const emojis = [
    "🚢",
    "🛳️",
    "🤖",
    "⛴️",
    "🌊",
    "🚤",
    "⚙️",
    "⛵",
    "🛥️",
    // "🦾",
    "🔧",
  ];

  return (
    <div className={`${backgroundColor} py-6 pb-0 overflow-hidden`}>
      <div className="relative flex">
        {/* First set of ships */}
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {emojis.map((emoji, index) => (
            <div key={`item-1-${index}`} className="flex items-center">
              <span
                className="mx-12 text-6xl opacity-80"
                style={{ color: "#60A5FA" }}
              >
                {emoji}
              </span>
              {/* Add submarine icon after every 3rd emoji */}
              {(index + 1) % 3 === 0 && (
                <img
                  src={submarineIcon}
                  alt="Submarine"
                  className="mx-12 w-16 h-16 opacity-80"
                />
              )}
            </div>
          ))}
        </div>

        {/* Duplicate set for seamless loop */}
        <div
          className="flex animate-marquee whitespace-nowrap items-center"
          aria-hidden="true"
        >
          {emojis.map((emoji, index) => (
            <div key={`item-2-${index}`} className="flex items-center">
              <span
                className="mx-12 text-6xl opacity-80"
                style={{ color: "#60A5FA" }}
              >
                {emoji}
              </span>
              {/* Add submarine icon after every 3rd emoji */}
              {(index + 1) % 3 === 0 && (
                <img
                  src={submarineIcon}
                  alt="Submarine"
                  className="mx-12 w-16 h-16 opacity-80"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ShipMarquee;
