import React from 'react';
import './index.css';
import reactDom from "react-dom";
import App from "./App";
import store from './redux/redux-store';
import { Provider } from 'react-redux';




let renderEntireTree = (state) => {

    reactDom.render(
        <Provider store={store}>
            <App />
        </Provider>, document.getElementById('root'));

}



renderEntireTree(store.getState());

store.subscribe(() => {
    renderEntireTree(store.getState());
});

