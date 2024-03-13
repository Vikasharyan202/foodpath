
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, Outlet} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import {lazy, Suspense} from "react";
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
// import Grocery from './components/Grocery';



 const App = () => {
  return(
    <Provider store={appStore}>
      <div className='app'>
      <Header/>
      <Outlet/>
      </div>
    </Provider>
  )
}

// load the about page when we will need
const Grocery = lazy(() => import("./components/Grocery"))

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Body/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Page Loading.............</h1>} ><Grocery/></Suspense>
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
      {
        path: "/restaurantMenu/:resId",
        element: <RestaurantMenu/>
      }
    ],
    errorElement: <Error/>
  },
  
])

export default App;







