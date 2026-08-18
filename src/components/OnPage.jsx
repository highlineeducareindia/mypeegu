import { Helmet } from "react-helmet";

const SITE_ORIGIN = "https://www.mypeegu.com";
const DEFAULT_OG_IMAGE = `${SITE_ORIGIN}/og-image.png`;

const toAbsoluteUrl = (value, fallback = DEFAULT_OG_IMAGE) => {
  if (!value) return fallback;
  if (/^https?:\/\//i.test(value)) return value;
  if (value.startsWith("//")) return `https:${value}`;
  if (value.startsWith("/")) return `${SITE_ORIGIN}${value}`;

  // Legacy relative paths like ../../assets/foo.png → /assets/foo.png
  const cleaned = value.replace(/^(\.\.\/)+/, "/").replace(/^assets\//, "/assets/");
  return `${SITE_ORIGIN}${cleaned.startsWith("/") ? cleaned : `/${cleaned}`}`;
};

const OnPage = ({ title, description, keywords, url, image }) => {
  const siteName = "MyPeegu";
  const absoluteUrl = toAbsoluteUrl(url, SITE_ORIGIN);
  const absoluteImage = toAbsoluteUrl(image);

  return (
    <Helmet>
      <title>
        {title} | {siteName}
      </title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      <link rel="canonical" href={absoluteUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={absoluteUrl} />
      <meta property="og:image" content={absoluteImage} />
      <meta property="og:site_name" content={siteName} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImage} />

      <meta name="robots" content="index, follow" />
    </Helmet>
  );
};

export default OnPage;
