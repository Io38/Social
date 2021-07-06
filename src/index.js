import React from 'react';
import './index.css';
import reactDom from "react-dom";
import App from "./App";
import store from './redux/state';




let renderEntireTree = (state) => {

    reactDom.render(
        <App
            state={store.getState()}
            addPost={store.addPost.bind(store)}
            updateNewPostText={store.updateNewPostText.bind(store)} />, document.getElementById('root'));

}



renderEntireTree(store.getState());

store.subscribe(renderEntireTree);

