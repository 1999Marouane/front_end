import React from 'react'
import img from './Besthouseplans.png'

const Home = () => {
    const style = {
        width: "500px",
    }

    return (
            <div className='col-sm-12 col-md-3  d-flex '>

                <div className=" card  m-4 d-flex" style={style}>
                    <img className="card-img-top" src={img} alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-title">vile</p>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
              
           
       
    )
}

export default Home