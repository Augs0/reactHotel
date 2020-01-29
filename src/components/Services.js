import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title';


export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: 'Free Cocktails',
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, aliquam?'
            },
            {
                icon: <FaHiking />,
                title: 'Endless trails',
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, aliquam?'
            },
            {
                icon: <FaShuttleVan />,
                title: 'Free shuttle service',
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, aliquam?'
            },
            {
                icon: <FaBeer />,
                title: 'Strongest beer',
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, aliquam?'
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
