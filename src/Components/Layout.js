import React from 'react';
import { Header } from './../Components/Header';
import { SideBar } from './../Components/SideBar';
import { Footer } from './../Components/Footer';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
    return (
        <>
            <div>Layout</div>
            <Header />
            <SideBar />
            <Footer />
            <Outlet />
        </>
    )
}
