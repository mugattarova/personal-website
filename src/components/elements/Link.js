import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import '../../styles/global.css';

export default function Link({ to, children }) {
  return (
    <GatsbyLink
      to={to}
      className='text-blue-munsell-900 decoration-lilac-700 decoration-solid decoration-2 underline-offset-8 hover:text-lilac-800 hover:underline'
    >
      {children}
    </GatsbyLink>
  );
}

export function EmbeddedLink({ to, children }) {
  return (
    <GatsbyLink
      to={to}
      className='text-sm text-jordy-blue-500 decoration-lilac-700 decoration-solid decoration-2 underline-offset-8 hover:text-lilac-800 hover:underline md:text-xl'
    >
      {children}
    </GatsbyLink>
  );
}
