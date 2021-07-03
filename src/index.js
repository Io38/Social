import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Partners from './components/Messages/Partners/Partners';
import MESSAGE_HISTORY from './components/Messages/Message_history/Message_history';
import Post from './components/myPosts/post/Post';



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

let partnersElements = partnersData.map(el => <Partners name={el.name} count={el.count} />);
let messagesElements = messagesData.map(el => <MESSAGE_HISTORY text={el.text} />);






let PostData = [
    { count: "1", text: "second post", LikesCount: "123" },
    { count: "1", text: "My first post", LikesCount: "0" },
    { count: "1", text: "My first post", LikesCount: "0" },
    { count: "1", text: "My first post", LikesCount: "0" },
    { count: "1", text: "My first post", LikesCount: "0" },

];

let PostsElements = PostData.map(el => <Post text={el.text} count={el.count} LikesCount={el.LikesCount} />);






ReactDOM.render(
    <App
        PostData={PostData}
        PostsElements={PostsElements}
        partnersData={partnersData}
        messagesData={messagesData}
        partnersElements={partnersElements}
        messagesElements={messagesElements}
    />, document.getElementById('root'));


reportWebVitals();
