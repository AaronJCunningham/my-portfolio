import Image from "next/image";
import Link from "next/link";

const NewsThumbnail = ({ src, title, link, imgWidth, imgHeight }) => {
  return (
    <div className="thumbnail_container">
      <div className="thumbnail_image_container">
        <div className="inner_image">
          <Image src={src} alt={title} width={imgWidth} height={imgHeight} />
        </div>
      </div>
      <div className="content_container">
        <div className="inner_content">
          <h2 className="thumbnail_title">{title}</h2>
          <Link href={link}>
            <button className="link_cursor">read more</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsThumbnail;
