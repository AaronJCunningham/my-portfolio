import Image from "next/image";
import Link from "next/link";

export const GridItem = ({ post }) => {
  return (
    <Link href={`/${post?.slug}`}>
      <div className="grid-container" key={post?.slug}>
        <div className="title-container">
          <h4>{post?.title.rendered}</h4>
        </div>
        <Image
          src={post?.better_featured_image.source_url || "/images/nike.jpg"}
          width={post?.better_featured_image?.media_details.width || 1920}
          height={post?.better_featured_image?.media_details.height || 1080}
        />
        <p>{post?.yoast_head_json.og_description}</p>
      </div>
    </Link>
  );
};

/* <NewsThumbnail
src={post?.better_featured_image.source_url || "/images/nike.jpg"}
imgWidth={post?.better_featured_image?.media_details.width || 1920}
imgHeight={post?.better_featured_image?.media_details.height || 1080}
title={post?.title.rendered || "bauhaus earth"}
excerpt={post?.yoast_head_json.og_description}
link={`/news/${post?.slug}`}
/> */
