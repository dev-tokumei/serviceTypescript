import React from 'react';

interface Inavbar {
  children?: React.ReactNode;
}

export const Navbar: React.FC<Inavbar> = ({ children }) => {
  return (
    <>
      <h1>Navbar</h1>
      <p>{children}</p>
    </>
  );
};
