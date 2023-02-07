import React from "react";
import Image from "next/image";

const display = [
  {
    image: "/images/vice.jpg",
    category: "",
    client: "VICE",
    URL: "https://www.vice.com/en/article/d35mxx/avatar-girls-pose-for-sexy-selfies-in-a-world-inspired-by-windows-95",
  },
  {
    image: "/images/vogue.jpg",
    category: "",
    client: "VOGUE",
    URL: "https://www.vogue.it/news/article/musica-estate-2020-nuovi-album-uscita-indie-elettronica",
  },
  {
    image: "/images/itsnicethat.png",
    category: "",
    client: "IT'S NICE THAT",
    URL: "https://www.itsnicethat.com/articles/stacie-ant-digital-311019",
  },
];

const Press = () => {
  return (
    <div id="press" className="about_content">
      <h2>
        <span>Press</span>
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
                    <img src={item.image} alt="" width={600} height={457} />
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
        <h3>Former Publications:</h3>
        <p>
          The Wall Street Journal - Boiler Room - Vice - LA Weekly - Vogue
          Italia - Vogue Hong Kong- Vanity Fair - DJ Mag - Faze - CBC -
          Screenshot - Elephant - Animation World Wide Network - Reality House -
          Blank - Tush - Hart - Chimera - It&apos;s Nice That - Tongues - Coeval
          - FeltZine - DTK Men - Verluxe - Curated by Girls - L!fe - Azucar -
          Milkweed - Akimbo - Pittsbrough City Paper - V - Now - Mishka
        </p>
      </div>
    </div>
  );
};

export default Press;
