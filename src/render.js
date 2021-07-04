import reactDom from "react-dom";
import App from "./App";
import { addPost } from "./redux/state";



let renderEntireTree = (state) => {

    reactDom.render(
        <App state={state} addPost={addPost} />, document.getElementById('root'));

}

export default renderEntireTree;