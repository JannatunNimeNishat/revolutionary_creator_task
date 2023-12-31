import {createBrowserRouter} from 'react-router-dom'
import Main from '../layout/Main';
import Home from '../pages/Home/Home/Home';
import ProductDetails from '../pages/Home/Home/ProductDetails/ProductDetails';


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/productDetails/:id',
                element:<ProductDetails></ProductDetails>
            }
        ]
    }
])


export default router;