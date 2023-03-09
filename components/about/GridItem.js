import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";

export const GridItem = ({ post }) => {
  const gridRef = useRef();
  const bgRef = useRef();

  const handleIn = () => {
    gsap.to(gridRef.current, { opacity: 0.5 });
    gsap.to(bgRef.current, { "background-color": "#292929", duration: 0.3 });
    gsap.to(bgRef.current, { scale: 0.98, duration: 0.3 });
  };
  const handleOut = () => {
    gsap.to(gridRef.current, { opacity: 1 });
    gsap.to(bgRef.current, { "background-color": "#191919", duration: 0.3 });
    gsap.to(bgRef.current, { scale: 1, duration: 0.3 });
  };

  const handleClick = () => {
    gsap.to(bgRef.current, { "background-color": "#797979", duration: 0.3 });
  };

  console.log(gridRef.current);
  return (
    <Link href={`/${post?.slug}`}>
      <div
        ref={bgRef}
        className="grid-container"
        key={post?.slug}
        onMouseEnter={handleIn}
        onMouseLeave={handleOut}
        onClick={handleClick}
      >
        <div className="title-container">
          <h4>{post?.title.rendered}</h4>
        </div>
        <div ref={gridRef}>
          <Image
            src={post?.better_featured_image.source_url || "/images/nike.jpg"}
            width={post?.better_featured_image?.media_details.width || 1920}
            height={post?.better_featured_image?.media_details.height || 1080}
          />
        </div>
        <p>{post?.yoast_head_json.og_description}</p>
      </div>
    </Link>
  );
};
