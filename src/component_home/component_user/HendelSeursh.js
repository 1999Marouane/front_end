import React from 'react'

const HendelSeursh = () => {
    const style = {

    }
    return (
        <div className='container'>
            

            <form action="" >


                <div className='m-3 d-flex justify-content-center align-items-center  '>
                    
                    <input type="text" className="form-control  " style={{ width: '350px', margin:"3px", }}name="countrie" id="" placeholder='countrie' />
                    <input type="text" className="form-control  " style={{ width: '350px', margin:"3px", }}name="city" id="" placeholder='city'  />
                    <div>
                        <select name=""  className="form-control" style={{ width: '350px', margin:"3px", }}id="">
                            <option value="">villa</option>
                            <option value="">room</option>
                            <option value="">hotel</option>
                            <option value="">home</option>
                        </select>
                    </div>
                    <button className="bg-secondary form-control " style={{ width: '150px', margin:"3px" }} >seursh</button>
                </div>
            </form>
        </div>
    
    )
}

export default HendelSeursh