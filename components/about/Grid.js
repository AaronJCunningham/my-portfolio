import { GridItem } from "./GridItem";
import { CV } from "./CV";

export const Grid = ({ posts }) => {
  return (
    <div className="project-grid" id="grid">
      <CV />
      <div id="bio" className="about_content">
        <h2 className="bio-h2">PROJECTS</h2>
      </div>
      <div className="main-grid-container">
        {posts.map((post) => {
          return <GridItem post={post} key={post?.slug} />;
        })}
      </div>
    </div>
  );
};
