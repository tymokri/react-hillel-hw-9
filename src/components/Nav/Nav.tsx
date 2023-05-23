import React from 'react';
import {pages} from '../../pages/routesList';
import {NavLink, Outlet} from "react-router-dom";
import {FC, ReactElement} from "react";


const Nav: FC = (): ReactElement => {
    return (
        <div className="container">
            <ul className="nav">
                {pages.map((page: {id: number, rout: string, title: string} ): ReactElement => (
                    <li key={page.id}>
                        <NavLink to={page.rout}>
                            {page.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <Outlet />
        </div>
    );
};

export default Nav;