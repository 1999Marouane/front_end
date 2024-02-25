import React from 'react'
// import './style.css'
import img from './Besthouseplans.png'
import img2 from './download1.jpg'
import img3 from './download2.jpg'
import img4 from './download3.jpg'
import img5 from './download4.jpg'


const Show = () => {
    return (
        <div className='container'>
            <div className='center-container'>
                <div className='center'>
                    <div id="carouselExampleIndicators" className="carousel slide">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={img2} className="d-block w-100 img-fluid" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={img3} className="d-block w-100 img-fluid" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={img4} className="d-block w-100 img-fluid" alt="..."/>
                            </div> <div className="carousel-item">
                                <img src={img5} className="d-block w-100 img-fluid" alt="..."/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className=''>




            </div>

        </div>
    )
}

export default Show