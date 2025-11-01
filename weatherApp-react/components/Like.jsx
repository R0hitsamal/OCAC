import { useState } from "react";

const Like = () => {
    const [likeCount, setLikeCount] = useState(0)
    return (
        <div className="container">
            <div className="box">
                <span className="Value">{likeCount}</span>
                <div> <button className="btn" onClick={() => setLikeCount(count => count + 1)}>Like</button>
                <button className="btn" onClick={() => setLikeCount(count => count - 1)}>Dislike</button></div>

            </div>
        </div>
    )
}

export default Like