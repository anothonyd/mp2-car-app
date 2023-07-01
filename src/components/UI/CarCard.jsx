import React, { useState } from 'react';
import steeringWheelImage from '../../assets/all-images/car-display-img/steering-wheel.svg';
import tireImage from '../../assets/all-images/car-display-img/tire.svg';
import gasImage from '../../assets/all-images/car-display-img/gas.svg';
import CarModal from './CarModal';
import { generateCarImageUrl } from '../../utils/api';

const CarCard = ({ car }) => {
    const { make, model, city_mpg, transmission, drive } = car;

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='car-card card-group d-flex'>
            <div className='car-card__content'>
                <h2 className='car-card__content-title'>{make} {model}</h2>
            </div>

            <p className='flex align-self-start mt-2 text-32px font-extrabold'>
                <span className='align-self-start text-14px font-semibold'>Php</span>
                <span style={{fontFamily:'"Manrope", sans-serif'}}>1899</span>
                <span className='align-self-end text-14px font-medium'>/day</span>
            </p>

            <div className='d-flex justify-content-center align-items-center mt-3'>
                <img
                    src={generateCarImageUrl(car)}
                    alt="hero"
                    className='img-fluid'
                    style={{
                        maxWidth: '350px'
                    }}
                />
            </div>

            <div className='card-footer position-relative flex w-full'>
                <div className='position-relative flex w-full justify-between font-black z-1'>
                    <div className='car-card__icon' style={{ width: '3.3rem' }}>
                        <img src={steeringWheelImage} width={20} height={20} alt='steering wheel' />
                        <p className='car-card__icon-text'>
                            {transmission === "a" ? "Auto" : "Manual"}
                        </p>
                    </div>
                    <div className="car-card__icon" style={{ width: '3.3rem' }}>
                        <img src={tireImage} width={20} height={20} alt="seat" />
                        <p className="car-card__icon-text">{drive.toUpperCase()}</p>
                    </div>
                    <div className="car-card__icon" style={{ width: '3.3rem' }}>
                        <img src={gasImage} width={20} height={20} alt="seat" />
                        <p className="car-card__icon-text">{city_mpg} MPG</p>
                    </div>
                </div>
            </div>
            <div className='car-card__btn-container position-relative'>
                <button className='rent_btn'>Rent</button>
                <button className='details_btn' onClick={() => setIsOpen(true)}>View More</button>

            </div>

            <CarModal isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />
        </div>
    );
};

export default CarCard;
