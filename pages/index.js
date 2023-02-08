import Script from "next/script";

import { Bio } from "../components/about/Bio";
import { Footer } from "../components/about/Footer";
import MetaDataHeader from "../components/MetaDataHeader";
import { Grid } from "../components/about/Grid";
import { AboutCanvas } from "../components/about/AboutCanvas";

const About = ({ posts }) => {
  return (
    <>
      <MetaDataHeader title={"Home"} />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-363JP1BQ7R"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_MEASUREMENT_ID');
        `}
      </Script>
      <main id="about">
        <div className="about-content-container">
          <Bio />
          <AboutCanvas />
        </div>
        <Grid posts={posts} />
        <Footer />
      </main>
    </>
  );
};
export default About;

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://xeleven.space/wp-json/wp/v2/initiatives");
  const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}
