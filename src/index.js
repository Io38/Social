import React from 'react';
import './index.css';
import state, { subscribe } from './redux/state';
import reactDom from "react-dom";
import App from "./App";
import { addPost, updateNewPostText } from "./redux/state";



let renderEntireTree = (state) => {

    reactDom.render(
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />, document.getElementById('root'));

}



renderEntireTree(state);

subscribe(renderEntireTree);

