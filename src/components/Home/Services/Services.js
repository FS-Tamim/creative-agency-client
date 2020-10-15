import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://cryptic-savannah-30453.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <section className="services">
            <div className="container">
                <h5 className="text-center serviceHeader mb-5">Provide awesome <span className='greenColor'>services</span></h5>
                <div className="row ">
                    {
                        services.map(service => <Service key={service._id} service={service} ></Service>)
                    }

                </div>
            </div>
        </section>
    );
};

export default Services;