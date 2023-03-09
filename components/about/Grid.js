import { useState } from "react";
import { GridItem } from "./GridItem";
import { CV } from "./CV";
import { useSelect } from "../../store";

export const Grid = ({ posts }) => {
  const [select, setSelect] = useSelect((state) => [
    state.select,
    state.setSelect,
  ]);

  const newPosts = posts.filter((post) => {
    if (select === null) {
      return posts;
    } else {
      return post.categories[0] === select;
    }
  });
  console.log(posts);
  return (
    <div className="project-grid" id="grid">
      <CV />
      <div id="bio" className="about_content">
        <h2 className="bio-h2">PROJECTS & BLOG</h2>
        <p>
          Here are a few of my recent projects, as well as some of my thoughts
          that I write for my blog.
        </p>
      </div>
      <div className="button-container">
        <button
          className={select === 5 ? "active" : null}
          onClick={() => setSelect(5)}
        >
          Projects
        </button>
        <button
          className={select === 4 ? "active" : null}
          onClick={() => setSelect(4)}
        >
          News
        </button>
        <button
          className={select === 8 ? "active" : null}
          onClick={() => setSelect(8)}
        >
          Tutorials
        </button>
        <button
          className={select === null ? "active" : null}
          onClick={() => setSelect(null)}
        >
          All
        </button>
      </div>
      <div className="main-grid-container">
        {newPosts.map((post) => {
          return <GridItem post={post} key={post?.slug} />;
        })}
      </div>
    </div>
  );
};
