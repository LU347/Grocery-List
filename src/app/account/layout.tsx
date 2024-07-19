
import React, { ReactNode } from 'react';
import Navbar from '../../app/ui/Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <><Navbar />
      <div className="flex flex-col">
          <main className="mt-20 flex-grow bg-slate-300">
              {children}
          </main>
      </div>
    </>
  );
};

export default Layout;
