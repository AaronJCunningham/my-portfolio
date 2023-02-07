import React from "react";
import Image from "next/image";

const display = [
  {
    image: "/images/01.jpg",
    category: "Natasha Greenhalgh",
    client: "NXT MUSEUM",
    URL: "https://youtu.be/Ol_6y3MfYHo",
  },
  {
    image: "/images/02.jpg",
    category: "Emily Drewry ",
    client: "Voice NFT",
    URL: "https://youtu.be/HHetbIYg7og",
  },
  {
    image: "/images/03.jpg",
    category: "Jess Conatser",
    client: "Studio As We Are",
    URL: "https://youtu.be/-8UiHw5fqnk",
  },
];

const Podcasts = () => {
  return (
    <div id="podcasts" className="about_content">
      <h2>
        <span>Podcasts</span>
      </h2>
      <div className="styled"></div>
      <div className="image_grid_container">
        <div className="items">
          {display.map((item, index) => {
            return (
              <a href={item.URL} target="_blank" rel="noreferrer" key={index}>
                <div
                  role="button"
                  className="item"
                  href="/portfolioDetail"
                  tabIndex={0}
                >
                  <div className="item-image">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="item-text">
                    <div className="item-text-wrap">
                      <p className="item-text-category">{item.category}</p>
                      <h2 className="item-text-title">{item.client}</h2>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
      <div className="about_description">
        <p>
          We started a podcast to interview digital artists, and people working
          in web3, blockchain, and the metaverse.
        </p>
      </div>
    </div>
  );
};

export default Podcasts;
