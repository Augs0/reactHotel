import React from 'react';
import { Link } from 'react-router-dom';

export default function Room({ room }) {
    console.log(room)
    const { name, slug, images, price } = room;
    return (
        <article className="room">
            <div className="img-container">
                <img src={images[0]} alt="overall look of the single room" />
            </div>
        </article>
    )
}
