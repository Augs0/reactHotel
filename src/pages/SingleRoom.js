import React, { Component } from 'react';
import defaultBcg from '../images/defaultBcg.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../context';
import StyledHero from '../components/StyledHero';

export default class SingleRoom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            slug: this.props.match.params.slug, //comes from react router,
            defaultBcg
        }
    }
    static contextType = RoomContext;
    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);
        if (!room) {
            return <div className="error">
                <p>No such room could be found...</p>
                <Link to="/rooms" className="btn-primary">Back to rooms</Link>
            </div>
        }
        const { name, description, capacity, size, price, extras, breakfast, pets, images } = room
        const [main, ...remainingImgs] = images;
        return (
            <>
                <StyledHero img={images[0] || defaultBcg}>
                    <Banner title={`${name} room`}>
                        <Link to="/rooms" className="btn-primary">Back to rooms</Link>
                    </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                        {remainingImgs.map((image, index) => {
                            return <img key={index} src={image} alt={name} />
                        })}
                    </div>
                    <div className="single-room-info">
                        <article className="description">
                            <h2>Details</h2>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h2>Info</h2>
                            <p>Price: £{price}</p>
                            <p>Size: {size} square feet</p>
                            <p>Max capacity: {capacity > 1 ?
                                `${capacity} people` :
                                `${capacity} person`
                            }</p>
                            <p>
                                {pets ? "Pets allowed" : "No pets  allowed"}
                            </p>
                            <p>
                                {breakfast && "Free breakfast included"}
                            </p>
                        </article>
                    </div>
                </section>
                <section className="room-extras">
                    <h2>Extras</h2>
                    <ul className="extras">
                        {extras.map((extra, index) => {
                            return <li key={index}>- {extra}</li>
                        })}
                    </ul>
                </section>
            </>
        )
    }
}
