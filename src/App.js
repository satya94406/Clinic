import React from 'react';
import Body from './Components/Body';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppStore from './Utils/AppStore';
import { Provider } from 'react-redux';
import Preview from './Components/Preview';


function App() {

  const AppRouter= createBrowserRouter([
      {
        path:"/",
        element:<Body/>
      }
      ,{
           path:"/Preview",
           element:<Preview/>
        }    
 ])

  return (
    <Provider store={AppStore}>
      <div className="flex justify-center items-center mt-5 ">
        <div>
            <RouterProvider router={AppRouter}/>
        </div>
      </div>
    </Provider>
  );
}

export default App;
