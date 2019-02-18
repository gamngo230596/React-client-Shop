import React, { Component } from 'react';

import {Route, Link } from 'react-router-dom';
const menus = [
    {
        name: 'Trang chủ',
        to: '/',
        exact: true
    },
    {
        name: 'Sản phẩm',
        to: '/collection',
        exact: true
    }
];
const MenuLink = ({label, to, activeOnlyWhenExact})=>{
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({match})=>{
                var active= match ? 'active' : '';
                return (
                    <li className={active}>
                        <Link to={to}>
                            {label}
                        </Link>
                    </li>
                )
            }}
        />
    );
};
class Menu extends Component {
    render() {
    
        return (
            <div className="divided">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 menu-main">
                        <ul>
                            {this.showMenus(menus)}
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    showMenus = (menus) =>{
        var result= null;
        if (menus.length >0){
            result= menus.map((menu, index)=>{
                return (
                    <MenuLink
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}
                    />
                ) 
            });
        }
        return result;
    }
}

export default Menu;
