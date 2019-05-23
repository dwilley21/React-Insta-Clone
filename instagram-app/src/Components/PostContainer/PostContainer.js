import React from 'react';
import '../../App.css'
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
    console.log(props)
    return (
        <div className="post-header">
            <div>
                <img src={props.thumbnailUrl} className="profile-thumb" />
                {props.username}
            </div>
            <img src={props.imageUrl} />
            {props.likes}
            <div>
               <CommentSection comments={props.comments} /> 
            </div>
        </div>

    )
}

export default PostContainer