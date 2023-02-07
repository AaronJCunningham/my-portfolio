import React from "react";

const display = [
  {
    image: "/images/aaron.jpg",
    category: "Aaron J. Cunningham",
    client: "Immersive Web Development",
    URL: "https://xeleven.tech",
  },
  {
    image: "/images/stacie.jpg",
    category: "Stacie Ant",
    client: "3D Artist & Creative Director",
    URL: "https://stacieant.com",
  },
];

const Team = () => {
  return (
    <div id="team" className="about_content">
      <h2>
        <span>Team</span>
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
    </div>
  );
};

export default Team;
