import React from 'react';
import './index.css';
import reactDom from "react-dom";
import App from "./App";
import store from './redux/state';




let renderEntireTree = (state) => {

    reactDom.render(
        <App
            state={store.getState()}
            dispatch={store.dispatch.bind(store)} />, document.getElementById('root'));

}



renderEntireTree(store.getState());

store.subscribe(renderEntireTree);

