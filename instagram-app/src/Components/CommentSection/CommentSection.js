import React from 'react'; 

const CommentSection = props => {
    return (
        <div className="comments">
            {props.comments.map(comment => {
                return <div>
                    <p><i>{comment.username}</i></p>{comment.text}
                </div>   
            })}
        </div>
    )
}
export default CommentSection; 