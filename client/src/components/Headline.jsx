import React from 'react';

const CustomHeading = ({ children, weight }) => {
  const headingStyles = `font-roboto h-40 text-4xl font-${weight} text-gray-800`;

  return <h1 className={headingStyles}>{children}</h1>;
};

export default CustomHeading;
