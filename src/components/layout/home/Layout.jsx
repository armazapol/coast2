import React from 'react';
import Header from './Header';

const Layout= ({ children }) => (
  <div className="">
    {/* <div className="h-20 lg:h-24 component-font"> */}
      {/* <Header /> */}
    {/* </div> */}
    <main className="bg-body px-0 h-auth lg:h-auth-md lg:px-0 main-font">
      {children}
    </main>
  </div>
);

export default Layout;
