
import React, { useEffect, useState } from 'react';
import './Home.css'

import ServiceCategory from '../ServiceCategory/ServiceCategory';



const Home = () => {
            const [category, setCategory] = useState([]);


            useEffect(() => {
                        fetch('./courses.JSON')
                                    .then(res => res.json())
                                    .then(data => setCategory(data.category))
            }, [])


            return (

                        <div>
                                    <div className='mt-5'>
                                                <h1 className="header-text mt-5">Find Your Path</h1>

                                    </div>
                                    <div className="container">
                                                <div className="row row-cols-3">

                                                            {
                                                                        category.map(category => <ServiceCategory
                                                                                    key={category.code}
                                                                                    category={category}

                                                                        ></ServiceCategory>)
                                                            }

                                                </div>
                                    </div>

                        </div >

            );
};

export default Home;