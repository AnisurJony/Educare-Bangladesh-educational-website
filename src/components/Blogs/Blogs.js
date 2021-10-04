import React from 'react';
import { Link } from 'react-router-dom';

const Blogs = () => {
            return (
                        <div>
                                    <h2 className="my-5" style={{ color: '#7952B3' }}> High-impact skill development <br /> for learner</h2>
                                    <div className="container my-5">
                                                <div className="row row-cols-3 g-5">
                                                            <div className="col-12 col-sm-6 col-md-4 ">
                                                                        <div className="card " style={{ width: "18rem" }}>
                                                                                    <img src="https://149362230.v2.pressablecdn.com/wp-content/uploads/2021/03/gettyimages-1192313070-170667a_Edit-1.jpg" className="card-img-top" alt="..." />
                                                                                    <div className="card-body">
                                                                                                <h5 className="card-title">Build in-demand skills for the business</h5>
                                                                                                <p className="card-text">Accelerate skill acquisition with SkillSets, turnkey job-based learning programs.</p>
                                                                                                <Link to="#" className="btn btn-primary">Learn More ...</Link>
                                                                                    </div>
                                                                        </div>
                                                            </div>
                                                            <div className="col-12 col-sm-6 col-md-4">
                                                                        <div className="card" style={{ width: "18rem" }}>
                                                                                    <img src="https://149362230.v2.pressablecdn.com/wp-content/uploads/2021/03/gettyimages-1060903200-170667a-1.jpg" className="card-img-top" alt="..." />
                                                                                    <div className="card-body">
                                                                                                <h5 className="card-title">Fast-track digital transformation</h5>
                                                                                                <p className="card-text">Deploy targeted learning for tech teams and build skills for everyone.</p>
                                                                                                <Link to="#" className="btn btn-primary">Learn More ...</Link>
                                                                                    </div>
                                                                        </div>
                                                            </div>
                                                            <div className="col-12 col-sm-6 col-md-4">
                                                                        <div className="card" style={{ width: "18rem" }}>
                                                                                    <img src="https://149362230.v2.pressablecdn.com/wp-content/uploads/2021/03/gettyimages-1175077096-170667a_Edit-1.jpg" className="card-img-top" alt="..." />
                                                                                    <div className="card-body">
                                                                                                <h5 className="card-title">Drive skill mastery with hands-on learning</h5>
                                                                                                <p className="card-text">Deliver applied tech and data skills with 1,000+ Guided Projects and in-course lab assignments.</p>
                                                                                                <Link to="#" className="btn btn-primary">Learn More ...</Link>
                                                                                    </div>
                                                                        </div>
                                                            </div>
                                                            <div className="col-12 col-sm-6 col-md-4">
                                                                        <div className="card" style={{ width: "18rem" }}>
                                                                                    <img src="https://149362230.v2.pressablecdn.com/wp-content/uploads/2021/03/gettyimages-1205248124-170667a_Edit-1-1.jpg" className="card-img-top" alt="..." />
                                                                                    <div className="card-body">
                                                                                                <h5 className="card-title">Drive skill mastery with hands-on learning</h5>
                                                                                                <p className="card-text">Quantify employee progress in technical and human skills with continuous assessments.</p>
                                                                                                <Link to="#" className="btn btn-primary">Learn More ...</Link>
                                                                                    </div>
                                                                        </div>
                                                            </div>
                                                            <div className="col-12 col-sm-6 col-md-4">
                                                                        <div className="card" style={{ width: "18rem" }}>
                                                                                    <img src="https://149362230.v2.pressablecdn.com/wp-content/uploads/2021/03/gettyimages-1192313070-170667a_Edit-1.jpg" className="card-img-top" alt="..." />
                                                                                    <div className="card-body">
                                                                                                <h5 className="card-title">Track, measure, and benchmark actual skill</h5>
                                                                                                <p className="card-text">Provide world-class training developed by leading universities and companies..</p>
                                                                                                <Link to="#" className="btn btn-primary">Learn More ...</Link>
                                                                                    </div>
                                                                        </div>
                                                            </div>

                                                </div>
                                    </div>
                        </div>
            );
};

export default Blogs;