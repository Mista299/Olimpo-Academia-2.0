import React from 'react';
import { Helmet } from 'react-helmet';

const Seo = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content="Tu Nombre" />
      <link rel="canonical" href={window.location.href} />
    </Helmet>
  );
};

export default Seo;
