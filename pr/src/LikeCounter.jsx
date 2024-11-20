import React, {useState} from 'react';

const LikeCounter = () => {
    const [likes, setLikes] = useState(0);

    const incrementLikes = () => setLikes(likes + 1);
    const resetLikes = () => setLikes(0);

    return (
        <div style={{textAlign: 'center', marginTop: '20px'}}>
            <p>
                <strong>Likes:</strong> {likes}
            </p>
            <button
                onClick={incrementLikes}
                style={{marginRight: '10px', padding: '20px 30px'}}
            >
                Вподобайка
            </button>
            <button
                onClick={resetLikes}
                style={{padding: '20px 30px', background: '#c13f35', color: '#ffffff', border: 'none'}}
            >
                Скинути
            </button>
        </div>
    );
};

export default LikeCounter;
