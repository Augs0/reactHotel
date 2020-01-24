import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';

export default function Rooms() {
    return (
        <div>
            <Hero hero="roomsHero">
                <Banner title="Rooms">
                    <Link to="/" className="btn-primary">
                        Return home
                    </Link>
                </Banner>
            </Hero>
        </div>
    )
}
