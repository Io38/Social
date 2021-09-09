import React from 'react';
import q from './MyPosts.module.css';
import Post from './post/Post';
import Preloader from "../preloader/Preloader";


const MyPosts = (props) => {


    if (!props.profile) {

        return <Preloader/>
    }

    let newPostElement = React.createRef();
    let PostsElements = props.PostData.map(el => <Post profile={props.profile} like={props.like} text={el.text} count={el.count}
                                                       LikesCount={el.LikesCount}/>);


    const onPostAdd = () => {

        props.postAdd();

    }


    let onPostChange = () => {

        let text = newPostElement.current.value;
        props.updateNewPostText(text);

    }

    return (

        <div className={q.myPosts}>
            {
                props.authorizedUserId === props.profile.userId ?
                    <h2>My posts:</h2>
                    :
                    (

                        <h2>Posts:</h2>
                    )
            }


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