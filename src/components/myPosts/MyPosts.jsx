import React from 'react';
import q from './MyPosts.module.css';
import Post from './post/Post';


const MyPosts = (props) => {

    let newPostElement = React.createRef();
    let PostsElements = props.PostData.map(el => <Post profile={ props.profile} text={el.text} count={el.count} LikesCount={el.LikesCount}/>);


    const onPostAdd = () => {

        props.postAdd();

    }


    let onPostChange = () => {

        let text = newPostElement.current.value;
        props.updateNewPostText(text);

    }

    return (

        <div className={q.myPosts}>
            <h2>My posts:</h2>


            <div className={q.posts}>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                <button onClick={onPostAdd}>Post</button>
            </div>


            <div>
                {PostsElements}
            </div>


        </div>
    );
}

export default MyPosts;