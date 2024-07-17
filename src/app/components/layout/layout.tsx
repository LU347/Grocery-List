
import React, { ReactNode } from 'react';
import Navbar from '../../ui/Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <><Navbar />
      <div className="h-screen flex flex-col lists-background">
          <main className="mt-24 p-4 flex-grow">
              {children}
          </main>
      </div>
    </>
  );
};

export default Layout;
