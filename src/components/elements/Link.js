import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import '../../styles/global.css';

function Link({ to, children  }) {
  return(
    <GatsbyLink to={to} className='text-blue-munsell-950 hover:text-lilac-800 hover:underline underline-offset-8 decoration-solid decoration-2 decoration-lilac-700'>
      {children}
    </GatsbyLink>
  )
}

export default Link;