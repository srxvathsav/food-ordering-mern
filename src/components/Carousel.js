import React from 'react';
import i1 from '../images/1.jpg';
import i2 from '../images/2.jpg';
import i3 from '../images/3.jpg';

function Carousel() {
    return (
        <div className='m-0 w-100 h-40' style={{objectFit:"contain !important"}}>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={i1} className="d-block w-100 img-fluid" alt="Slide 1" />
                        <div className="d-flex justify-content-center align-items-center h-100 position-absolute top-0 start-0 w-100">
                            <form className="d-flex w-50">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-light" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={i2} className="d-block w-100 img-fluid" alt="Slide 2" />
                        <div className="d-flex justify-content-center align-items-center h-100 position-absolute top-0 start-0 w-100">
                            <form className="d-flex w-50">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-light" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={i3} className="d-block w-100 img-fluid" alt="Slide 3" />
                        <div className="d-flex justify-content-center align-items-center h-100 position-absolute top-0 start-0 w-100">
                            <form className="d-flex w-50">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-light" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}


export default Carousel;
