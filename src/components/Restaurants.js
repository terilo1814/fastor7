import React, { useState } from 'react';
import './Restaurants.css'
import { Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


export const Restaurants = ({ restaurantList }) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const navigate = useNavigate()

    const descHandler = (index) => {
        navigate(`/restaurant-desc?id=${index}`)
    }


    const dessertList = [
        {
            id: 10,
            name: `Nik Baker's`,
            location: 'Connaught Palace, New Delhi',
            image: require('../assets/images/hazelnut.jpg'),
        },
        {
            id: 20,
            name: `Cakery`,
            location: 'Whitefield,Bangalore',
            image: require('../assets/images/tart.jpg'),
        },
        {
            id: 30,
            name: 'Florence',
            location: 'Sarojini, New Delhi',
            image: require('../assets/images/redvelvet.jpg'),
        },
        {
            id: 40,
            name: `Breeze`,
            location: 'Andheri,Mumbai',
            image: require('../assets/images/macarons.jpg'),
        },

    ]


    return (
        <>
            <div className='header-container'>
                <span className='text1'>Pre Order From</span>
                <span className='text2'>Connaught Place</span>
            </div>
            <div className='profile-container'>
                <div className='text-container'>
                    <span className='name-text'>Karan</span>
                    <span className='desc-text'>Let's explore this evening</span>
                </div>
                <div className='offers'>
                    <img src={require('../assets/images/offers.JPG')} alt='offers' className='offer-img' />
                    <span className='tag-text'>Offers</span>
                </div>
                <div className='wallet'>
                    <img src={require('../assets/images/wallets.JPG')} alt='wallets' className='wallet-img' />
                    <span className='tag-text'>Wallets</span>
                </div>

            </div>

            <div className='slider-ui'>
                <h2 className='slider-text'>Your Taste</h2>
                <span className='seeall-text'>see all</span>
            </div>

            <div className='carousel-dessert'>
                {dessertList.map((item, index) => (
                    <div class="gallery-cell" key={item.id}>
                        <img className='dessert-ui' src={item.image} alt={item.name} />
                        <p className='name'>{item.name}</p>
                        <p className='location'>{item.location}</p>
                    </div>
                ))}
            </div>


            <div className='veggies'>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <div className='salad-img salad'></div>
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='salad-img bread-salad'></div>
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='salad-img tomato-salad'></div>
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className='popular'>
                <div className='popular-container'>
                    <h2 className='popular-text'>Popular Ones</h2>

                    {restaurantList.map((item, index) => (
                        <div className='items-ui' key={item.id} onClick={() => descHandler(item.id)}>
                            <img className='image-ui' src={item.image} alt={item.name} />
                            <div>
                                <h3>{item.name}</h3>
                                <p>{item.items.join(', ')}</p>
                                <p>{item.location}</p>
                                <p className='rating-ui'>★{item.rating} &nbsp;{item.price}</p>

                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    );
};
