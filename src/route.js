import React from 'react';
import HomePage from './pages/Home/home';
import NotFoundPage from './pages/NotFound/notfound';
import CollectionPage from './pages/Collection/collection';
import AdminPage from './pages/Admin/admin';
import ProductPage from './pages/Product/product';
const routes = [
    {
        path:'/',
        exact: true,
        main: ()=> <HomePage/>
    },
    {
        path:'/collection',
        exact: true,
        main: ()=> <CollectionPage/>
    },
    {
        path:'/products/:name/:id',
        exact: true,
        main: ({match})=> <ProductPage match={match}/>
    },
    {
        path:'/admin',
        exact: true,
        main: ()=> <AdminPage/>
    },
    {
        path:'',
        exact: true,
        main: ()=> <NotFoundPage/>
    }
];
export default routes;