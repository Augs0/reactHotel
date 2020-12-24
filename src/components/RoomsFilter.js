import React, { useContext } from 'react';
import { RoomContext } from '../context';
import Title from '../components/Title';

const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

export default function RoomsFilter({ rooms }) {
    const context = useContext(RoomContext);
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets } = context;

    // Get unique types
    let types = getUnique(rooms, 'type');
    //  Add all
    types = ['all', ...types];
    //  Map to JSX
    types = types.map((item, idx) => {
        return <option value={item} key={idx}>{item}</option>
    })

    //  Get people
    let people = getUnique(rooms, 'capacity');
    people = people.map((item, idx) => {
        return <option key={idx} value={item}>{item}</option>
    })
    return (
        <section className="filter-container">
            <Title title="Search rooms" />
            <form className="filter-form">
                {/* Select type */}
                <div className="form-group">
                    <label htmlFor="type">Room Type</label>
                    <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                        {types}
                    </select>
                </div>
                {/* End select type */}
                {/* Select guests */}
                <div className="form-group">
                    <label htmlFor="capacity">Guests Type</label>
                    <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
                        {people}
                    </select>
                </div>
                {/* End select guests */}
                {/* Room price */}
                <div className="form-group">
                    <label htmlFor="price">Room Price ${price}</label>
                    <input type="range" name="price" min={minPrice} max={maxPrice} id="price"
                        value={price} onChange={handleChange} className="form-control" />
                </div>
                {/* End of room price */}
                {/* Start of size */}
                <div className="form-control">

                    <div className="size-inputs">
                        <label className="spacing" htmlFor="minSize">Minimum Size</label>
                        <input type="number" name="minSize" id="minSize" value={minSize} onChange={handleChange} className="size-input" />
                        <label htmlFor="maxSize">Maximum Size</label>
                        <input type="number" name="maxSize" id="maxSize" value={maxSize} onChange={handleChange} className="size-input" />
                    </div>
                </div>
                {/* End of size */}
                {/* Start of extras */}
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
                        <label htmlFor="breakfast">Breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} />
                        <label htmlFor="pets">Pets</label>
                    </div>
                </div>
                {/* End of extras */}
            </form>
        </section>

    )
}
