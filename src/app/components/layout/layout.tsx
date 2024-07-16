
import React, { ReactNode } from 'react';
import Navbar from '../../ui/Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <><Navbar />
       <div className="h-screen flex flex-col">
          <main className="mt-24 p-4 flex-grow"> {/* Adjust mt-24 based on your navbar height */}
              {children}
          </main>
      </div></>
  );
};

export default Layout;
