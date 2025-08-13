import React from 'react';
import { RouterProvider } from 'react-router-dom';
import AppRoutes from './Routes/AppRoutes';

function App() {

  return (
   <div>
      <RouterProvider router={AppRoutes} />
   </div>
  );
}

export default App;