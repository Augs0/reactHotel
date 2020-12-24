import React, { Component } from 'react';
import items from './data';

const RoomContext = React.createContext();
// Provider - allows all components to access
// Consumer - access the above information

class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        type: "all",
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
    };

    //getData
    componentDidMount() {
        let rooms = this.formatData(items);
        let featuredRooms = rooms.filter(room => room.featured === true);
        let maxPrice = Math.max(...rooms.map(item => {
            return item.price
        }))
        let maxSize = Math.max(...rooms.map(item => {
            return item.size
        }))
        this.setState({
            rooms,
            featuredRooms,
            sortedRooms: rooms,
            loading: false,
            price: maxPrice,
            maxPrice,
            maxSize
        })
    }

    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id
            let images = item.fields.images.map(image => image.fields.file.url);

            let room = { ...item.fields, images: images, id }
            return room;
        });
        return tempItems;
    }

    getRoom = (slug) => {
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find(room => room.slug === slug);
        return room;
    }

    handleChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = e.target.name;
        this.setState({
            //  Looking for the name of info in state and returning the value of that
            [name]: value
        }, this.filterRooms) //  Async - runs after the setState
    }

    filterRooms = () => {
        let { rooms, type, capacity, price, minSize, maxSize, breakfast, pets } = this.state;
        let tempRooms = [...rooms];
        // Transform values
        capacity = parseInt(capacity);
        price = parseInt(price)
        //  If a room type is selected, return all rooms that match the type that is in the state
        if (type !== 'all') {
            tempRooms = tempRooms.filter(room => room.type === type)
        }
        //  Filter by capacity - only if more than 1
        if (capacity !== 1) {
            tempRooms = tempRooms.filter(room => room.capacity >= capacity)
        }
        //  Filter by price
        tempRooms = tempRooms.filter(room => room.price <= price)
        // Filter by size
        tempRooms = tempRooms.filter(room => room.size > minSize && room.size < maxSize)
        //  Filter by breakfast
        if (breakfast) {
            tempRooms = tempRooms.filter(room => room.breakfast === true)
        }
        //  Filter by pets
        if (pets) {
            tempRooms = tempRooms.filter(room => room.pets === true)
        }
        //  Change state
        this.setState({
            sortedRooms: tempRooms
        })
    }

    render() {
        return (
            <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom, handleChange: this.handleChange }}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component) {
    return function ConsumerWrapper(props) {
        return <RoomConsumer>
            {value => <Component{...props} context={value} />}
        </RoomConsumer>
    }
}

export { RoomProvider, RoomConsumer, RoomContext };
