import React from 'react';

function Footer({ children }) {
  return (
    <div className="flex justify-between">
      {children}
    </div>
  );
}

export default Footer;
