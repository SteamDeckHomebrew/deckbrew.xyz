import React from "react";
import { Helmet } from "react-helmet";
import Icon from "../../images/icon.png";

interface HelmetType {
  title?: string;
  description?: string;
  image?: string;
}

const HelmetComponent = ({ title, description, image }: HelmetType) => {
  const newTitle = title
    ? `${title} - Steam Deck Homebrew`
    : `Steam Deck Homebrew`;

  const newDescription = description
    ? description
    : "Steam Deck Homebrew is an open-source group working to bring plugin support to the Steam Deck.";

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{newTitle}</title>
      <meta name="title" content={title ? title : "Steam Deck Homebrew"} />
      <meta name="description" content={newDescription} />
      <meta name="theme-color" content="#199fff" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={image ? "article" : "website"} />
      <meta
        property="og:title"
        content={title ? title : "Steam Deck Homebrew"}
      />
      <meta property="og:site_name" content="Steam Deck Homebrew" />
      <meta property="og:description" content={newDescription} />
      <meta property="og:image" content={image ? image : Icon} />

      {/* Twitter */}
      <meta
        property="twitter:title"
        content={title ? title : "Steam Deck Homebrew"}
      />
      <meta property="twitter:description" content={newDescription} />
      <meta property="twitter:image" content={image ? image : Icon} />
      {image && <meta property="twitter:card" content="summary_large_image" />}
    </Helmet>
  );
};

export default HelmetComponent;
