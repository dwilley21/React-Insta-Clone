import React from 'react'; 

const CommentSection = props => {
    return (
        <div className="comments">
            {props.comments.map(comment => {
                return <div>
                    <h3>{comment.username}</h3>
                    <p>{comment.text}</p>
                </div>   
            })}
            <input type="text" />
        </div>
    )
}
export default CommentSection; 