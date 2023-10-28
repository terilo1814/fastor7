import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './Description.css';

export const Description = ({ restaurantList }) => {
    const [items, setItems] = useState({});
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const canvasRef = useRef(null);
    const [imageData, setImageData] = useState(null);

    const [overlayImagePosition, setOverlayImagePosition] = useState({
        x: 0,
        y: 0,
    });

    useEffect(() => {
        const param1 = queryParams.get('id');
        if (!param1) {
            navigate('/restaurant-list');
        }
        const filteredId = restaurantList.find((item) => item.id === Number(param1));
        setItems(filteredId);
    }, []);


    useEffect(() => {
        if (items?.image) superimposeImages();
    }, [items, overlayImagePosition]);

    const superimposeImages = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const backgroundImage = new Image();
        backgroundImage.src = items.image;
        backgroundImage.onload = () => {
            canvas.width = backgroundImage.width;
            canvas.height = backgroundImage.height;
            ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

            const overlayImage = new Image();
            overlayImage.src = require('../assets/images/Fastor.png');
            overlayImage.onload = () => {
                const x = overlayImagePosition.x;
                const y = overlayImagePosition.y;
                ctx.drawImage(overlayImage, x, y);

                const downloadLink = document.createElement('a');
                downloadLink.href = canvas.toDataURL('image/png');
                downloadLink.download = 'superimposed_image.png';

                setImageData(canvas.toDataURL('image/png'));
            };
        };
    };


    const handlePositionChange = (event) => {
        const { name, value } = event.target;
        setOverlayImagePosition({
            ...overlayImagePosition,
            [name]: parseInt(value, 10),
        });
    };

    return (
        <>
            <div className="image-container">
                <img src={imageData} alt={items.name} className="image-bg" />

                <div className="box-container">
                    <p className="item-name">{items.name}</p>
                    <p className='rating-ui'>★{items.rating}</p>
                    <p>{items.location}</p>
                    <p>{items.desc}</p>

                    <a className='download-image' href={imageData} download="superimposed_image.png">
                        Download Image
                    </a>

                    <div className='position-ui'>
                        <label>
                            Position X:
                            <input
                                type="number"
                                name="x"
                                value={overlayImagePosition.x}
                                onChange={handlePositionChange}
                            />
                        </label>
                        <label>
                            Position Y:
                            <input
                                type="number"
                                name="y"
                                value={overlayImagePosition.y}
                                onChange={handlePositionChange}
                            />
                        </label>
                    </div>

                    <canvas className='canvas-container'
                        ref={canvasRef}
                        width={800}
                        height={600}
                        style={{ border: '1px solid #000' }}
                    ></canvas>
                </div>
            </div>
        </>
    );
};
