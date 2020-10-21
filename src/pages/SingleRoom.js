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
        return (
            <StyledHero img={images[0] || defaultBcg}>
                <Banner title={`${name} room`}>
                    <Link to="/rooms" className="btn-primary">Back to rooms</Link>
                </Banner>
            </StyledHero>
        )
    }
}
