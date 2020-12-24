import React from 'react'
import Room from './Room'

export default function RoomsList({ rooms }) {
    if (rooms.length === 0) {
        return (
            <div className="empty-search">
                No matching rooms found.
            </div>
        );
    }
    return (<section className="roomsList">
        <div className="roomslist-center">
            {rooms.map(room => {
                return <Room key={room.id} room={room} />
            })}
        </div>
    </section>
    )
}
