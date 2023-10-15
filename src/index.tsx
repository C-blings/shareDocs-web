import 'reflect-metadata';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Registration from "./ui/components/Registration";
import {container} from "tsyringe";
import {configure} from "@yoskutik/react-vvm";
import Profile from "./ui/components/Profile";

configure({
    vmFactory: VM => container.resolve(VM),
});

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "profile/:id",
        element: <Profile/>
    },
    {
        path: "registration",
        element: <Registration/>
    }
])


root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();