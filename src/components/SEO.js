import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import logo from "../logo/logo.jpeg"; // Adjust path to your logo

const SEO = ({
  title = "Plumbcon Plumbing | Professional Plumbing Services in Harare",
  description = "Expert plumbing services in Harare since 2000. Specializing in installations, water piping, drain laying, and emergency repairs.",
  url = "https://plumbconafrica.co.zw/",
}) => {
  // Construct absolute URL for logo
  const absoluteLogoUrl = `${url}${logo}`; // Adjust this based on your deployment setup

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Favicon and App Icons */}
      <link rel="icon" type="image/png" href={logo} />
      <link rel="apple-touch-icon" href={logo} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteLogoUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Plumbcon Plumbing" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteLogoUrl} />

      {/* Additional Meta Tags */}
      <meta
        name="keywords"
        content="Plumbcon ,plumbing services, Harare plumber, emergency plumbing, water piping, drain laying, plumbing installations, Zimbabwe plumbing"
      />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Plumbcon Plumbing" />

      {/* Schema.org JSON-LD for Logo */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Plumbcon Plumbing",
          url: url,
          logo: absoluteLogoUrl,
          image: absoluteLogoUrl,
          description: description,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Harare",
            addressCountry: "Zimbabwe",
          },
        })}
      </script>
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
};

SEO.defaultProps = {
  title: "Plumbcon Plumbing | Professional Plumbing Services in Harare",
  description:
    "Expert plumbing services in Harare since 2000. Specializing in installations, water piping, drain laying, and emergency repairs.",
  url: "https://plumbconafrica.co.zw/",
};

export default SEO;
