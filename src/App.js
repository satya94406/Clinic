import React from 'react';
import Body from './Components/Body';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppStore from './ReduxStore/AppStore';
import { Provider } from 'react-redux';
import Preview from './Components/Preview';
import Header from './Components/Header';
import ErrorPage from './Components/ErrorPage';


function App() {

  const AppRouter= createBrowserRouter([
    ,{
        path:"/Clinic",
        element:<Body/>,
      }
      ,{
        path:"/Preview",
        element:<Preview/>
       },   
       {
        path:"*",
        element:<ErrorPage/>
       }
 ])

  return (
    <Provider store={AppStore}>
      <Header/>
      <div className="flex justify-center items-center mt-5 ">
        <div>
            <RouterProvider router={AppRouter}/>
        </div>
      </div>
    </Provider>
  );
}

export default App;