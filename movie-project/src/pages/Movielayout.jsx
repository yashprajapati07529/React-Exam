import React from "react";
import { Movielist } from "./Movielist";
import { BrowserRouter, Routes, Route } from "react-router";
import { ComponentList } from "../components/Componentslist";

const Movielayout = () => {
    return (
        <BrowserRouter>
            <div>
                <ComponentList.Header />

                <Routes>
                    <Route
                        path="/"
                        element={<Movielist.Home />}
                    />

                    <Route
                        path="/movie"
                        element={<Movielist.Movie />}
                    />

                    <Route
                        path="/tvshow"
                        element={<Movielist.TVshow />}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default Movielayout;