  // components/SEO.jsx
  import { Helmet } from "react-helmet";

  const OnPage= ({
    title,
    description,
    keywords,
    url,
    image,
  }) => {
    const siteName = "MyPeegu";

    return (
      <Helmet>
        {/* Basic */}
        <title>{title} | {siteName}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />

        {/* Canonical URL */}
        <link rel="canonical" href={url} />

        {/* Open Graph (Facebook, WhatsApp) */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />

        {/* Mobile + Browser */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Robots */}
        <meta name="robots" content="index, follow" />
      </Helmet>
    );
  };

  export default OnPage;