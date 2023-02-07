import { GridItem } from "./GridItem";

export const Grid = ({ posts }) => {
  console.log(posts);
  return (
    <div className="project-grid" id="grid">
      <div className="main-grid-container">
        {posts.map((post) => {
          return <GridItem post={post} key={post?.slug} />;
        })}
      </div>
    </div>
  );
};
