import React from 'react';
import { Header } from './../Components/Header';
import { Footer } from './../Components/Footer';
import { Outlet } from 'react-router-dom';
import { Nav } from './Nav';
import { Main } from './Main';

export const Layout = () => {
    return (
        <section id="mainContainer" class="grid-container">
            <Header />
            <Nav />
            <Main />
            <Footer />
        </section>
    )
}
