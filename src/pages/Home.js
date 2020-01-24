import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';

export default function Home() {
    return (
        <React.Fragment>
            <Hero>
                <Banner title="Hotel Eos" subtitle="Explore our rooms">
                    <Link to='/rooms' className="btn-primary">
                        Rooms
            </Link>
                </Banner>
            </Hero>
            <Services />
        </React.Fragment>
    )
}

