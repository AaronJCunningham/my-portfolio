import React from "react";
import Image from "next/image";

const display = [
  {
    image: "/images/shiloh.png",
    category: "Metaverse Development",
    client: "Spirit Realm",
    URL: "https://spiritrealm.art",
  },
  {
    image: "/images/nike.jpg",
    category: "Metaverse Design",
    client: "Nike, The Face, Tiffany Calver",
    URL: "https://theface.com/tiffany-calvers-world",
  },
  {
    image: "/images/bauhaus_earth.jpg",
    category: "Immersive Web Development",
    client: "Bauhaus Erde",
    URL: "https://bauhauserde.org",
  },
  {
    image: "/images/persona.jpg",
    category: "Immersive Web Development",
    client: "House Of Persona",
    URL: "https://houseofpersona.com",
  },
  {
    image: "/images/zeroten.jpg",
    category: "AR Development",
    client: "Zero10",
    URL: "https://zero10.app/",
  },
  {
    image: "/images/nxt_project.jpg",
    category: "Immersive Installation",
    client: "NXT Museum",
    URL: "https://nxtmuseum.com/",
  },
];

const Portfolio = () => {
  return (
    <div id="projects" className="about_content">
      <h2>
        <span>Projects</span>
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
        <h3>Former Clients:</h3>
        <p>
          Adidas - Nike - The Face - NXT Museum - Zero10 - IOST - CoinSquare -
          Musee Dezentral - House Of Persona - Bauhaus Earth - Adrianna Hot
          Couture - Zizou Clothing - Young Fashion Minds - DJ Hell - Tornado
          Wallace - Dinny Skip - Mr Eff (Burning Witches Records) - The Orielles
          (Heavenly Recordings) - Helsinki Fashion Week - Alana O&apos;Herlihy -
          Sadu - The Fabulous Downey Brothers x B52s - Klypi - Tremors TV -
          Monomango - Plantskul - Flipp Dinero - Audrey Nuna - MF Doom - Lim Kim
          - French Pirates - AK Sports - Walter Van Beirendonck - Lin Pesto -
          WIA - Italo Bitches - Sameheads - The Moonbaby - CHAiLD - Eugenie -
          The Moon King - Evangeline Donatachi - KausEffekt - NoName Shoes -
          BrawHaus - DeTrek - Partiboi69 - Grant - Hey Charlie - The Crowlies -
          Isla Beauty - Object and Animal - Sony Music - Universal Music -
          Therapy Berlin - RaveSpace
        </p>
      </div>
    </div>
  );
};

export default Portfolio;
