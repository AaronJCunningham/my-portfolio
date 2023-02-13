import { GridItem } from "./GridItem";

export const Grid = ({ posts }) => {
  return (
    <div className="project-grid" id="grid">
      <h2>PROJECTS</h2>
      <div className="main-grid-container">
        {posts.map((post) => {
          return <GridItem post={post} key={post?.slug} />;
        })}
      </div>
    </div>
  );
};
