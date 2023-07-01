import React from 'react';
import { Modal } from 'react-bootstrap';
import { generateCarImageUrl } from '../../utils/api';

export default function CarModal({ isOpen, closeModal, car }) {
    const handleClose = () => {
        closeModal();
    };

    return (
        <Modal show={isOpen} onHide={handleClose} className='modal'>
            <Modal.Header closeButton onClick={handleClose}></Modal.Header>

            <Modal.Body className='modal-dialog mt-0'>
                <div className='position-relative bg-primary-pink w-full rounded px-5 mb-3'>
                    <img
                        src={generateCarImageUrl(car)}
                        alt='car model'
                        className='img-fluid object-fit-contain pt-3 px-5'
                    />
                </div>

                <div className='d-flex gap-3'>
                    <div className='position-relative flex-grow-1 h-24 bg-primary-pink-100 rounded'>
                        <img
                            src={generateCarImageUrl(car, '29')}
                            alt='car model'
                            className='img-fluid object-fit-contain pt-2'
                        />
                    </div>
                    <div className='position-relative flex-grow-1 h-24 bg-primary-pink-100 rounded'>
                        <img
                            src={generateCarImageUrl(car, '33')}
                            alt='car model'
                            className='img-fluid object-fit-contain pt-4'
                        />
                    </div>
                    <div className='position-relative flex-grow-1 h-24 bg-primary-pink-100 rounded'>
                        <img
                            src={generateCarImageUrl(car, '13')}
                            alt='car model'
                            className='img-fluid object-fit-contain pt-2'
                        />
                    </div>
                </div>


                <div className='d-block gap-2 mt-3'>
                    <h2 className='font-semibold fs-3' style={{ textTransform: 'capitalize' }} >
                        {car.make} {car.model}
                    </h2>

                    <div className='d-block mt-3'>
                        {Object.entries(car).map(([key, value]) => (
                            <div className='d-flex fs-6 w-full justify-content-between' style={{ height: '2rem' }} key={key} >
                                <div><p className='text-dark-emphasis text-capitalize'>
                                    {key.split('_').join(' ')}
                                </p></div>
                                <div><p className='text-black fw-bold text-capitalize text-end'>
                                    {value}
                                </p></div>
                            </div>
                        ))}
                    </div>

                </div>
            </Modal.Body>
        </Modal>
    );
};

