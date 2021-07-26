import React from 'react';
import './index.css';
import reactDom from "react-dom";
import App from "./App";
import store from './redux/redux-store';
import { Provider } from 'react-redux';
import {BrowserRouter} from "react-router-dom";




let renderEntireTree = () => {

    reactDom.render(
        <Provider store={store}>
            <BrowserRouter>
            <App />
            </BrowserRouter>
        </Provider>, document.getElementById('root'));

}



renderEntireTree(store.getState());


