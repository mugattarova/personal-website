import React from 'react';

export default function TabTitle({ data, children }) {
  return (
    <title>
      {children} | {data.site.siteMetadata.title}
    </title>
  );
}
