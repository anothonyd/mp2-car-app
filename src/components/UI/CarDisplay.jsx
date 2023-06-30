import { useEffect, useState } from 'react';
import { fetchCars } from '../../utils/api';
import CarCard from './CarCard';
import '../../styles/car-display.css'

export default function CarDisplay() {
    const [allCars, setAllCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const cars = await fetchCars();
                setAllCars(cars);
                setLoading(false);
            } catch (error) {
                setError('Error fetching cars.');
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return (
            <div className='home__error-container'>
                <h2 className='fw-bold'>Oops, an error occurred</h2>
                <p>{error}</p>
            </div>
        );
    }

    if (allCars.length === 0) {
        return (
            <div className='home__error-container'>
                <h2 className='fw-bold'>Oops, no results</h2>
                <p>No cars available.</p>
            </div>
        );
    }

    return (
        <main>
            <div className='d-flex justify-content-start'>
            </div>
            <section>
                <div className='home__cars-wrapper position-relative flex justify-content-center align-items-center'>
                    {allCars.map((car) => (
                        <CarCard key={car.id} car={car} />
                    ))}
                </div>
            </section>
        </main>
    );
}
