import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



let partnersData = [
    { count: "1", name: "Vasya" },
    { count: "2", name: "Petya" },
    { count: "3", name: "John" },
    { count: "4", name: "Viktor" },
    { count: "5", name: "ZeroTwo" },
    { count: "6", name: "Sasha" },
];

let messagesData = [
    { count: "1", text: "hi!" },
    { count: "2", text: "How r u?" },
    { count: "3", text: "Hello!" },
    { count: "4", text: "ty" }
];








let PostData = [
    { count: "1", text: "second post", LikesCount: "123" },
    { count: "1", text: "My first post", LikesCount: "0" },
    { count: "1", text: "My first post", LikesCount: "0" },
    { count: "1", text: "My first post", LikesCount: "0" },
    { count: "1", text: "My first post", LikesCount: "0" },

];








ReactDOM.render(
    <App
        PostData={PostData}
        partnersData={partnersData}
        messagesData={messagesData}

    />, document.getElementById('root'));


reportWebVitals();
