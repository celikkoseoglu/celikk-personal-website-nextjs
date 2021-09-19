import Head from "next/head";
import metaDecorator from "../../data/metaDecorator.json";

export const getMeta = (title, description, imageUrl, imageAlt) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={metaDecorator.hostname + imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image:alt" content={imageAlt} />
      <meta name="twitter:site" content={metaDecorator.twitterUsername} />
    </Head>
  );
};
