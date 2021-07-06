import React from 'react';
import './index.css';
import state, { subscribe } from './redux/state';
import reactDom from "react-dom";
import App from "./App";
import store, { addPost, updateNewPostText } from "./redux/state";



let renderEntireTree = (state) => {

    reactDom.render(
        <App
            state={store.getState()}
            addPost={store.addPost}
            updateNewPostText={store.updateNewPostText} />, document.getElementById('root'));

}



renderEntireTree(store.getState());

store.subscribe(renderEntireTree);

