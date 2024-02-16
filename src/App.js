import React from 'react';
import Body from './Components/Body';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppStore from './ReduxStore/AppStore';
import { Provider } from 'react-redux';
import Header from './Components/Header';
import ErrorPage from './Components/ErrorPage';
import SubmitPage from './Components/SubmitPage';


function App() {

  const AppRouter= createBrowserRouter([
    ,{
        path:"/Clinic",
        element:<Body/>,
      }, 
       {
        path:"/Submit",
        element:<SubmitPage/>
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