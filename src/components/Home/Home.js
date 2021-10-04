
import React, { useEffect, useState } from 'react';


import ServiceCategory from '../ServiceCategory/ServiceCategory';



const Home = () => {
            const [category, setCategory] = useState([]);


            useEffect(() => {
                        fetch('./courses.JSON')
                                    .then(res => res.json())
                                    .then(data => setCategory(data.category))
            }, [])


            return (
                        <div className="">
                                    <div className="bg- ">
                                                <div className='mt-5'>
                                                            <h1 className="text-warning text-bold mt-5">Find Your Category</h1>

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
                        </div>
            );
};

export default Home;