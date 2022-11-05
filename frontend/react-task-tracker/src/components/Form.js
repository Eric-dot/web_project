
import React from 'react'
const Form = () => {
    return (
        <div className='row'>
            <div className="col">
            </div>

            <div className='col-6'>

                <div className='card mx-5 my-5 '>
                    <div>
                        <h3 className='text-center mt-4 md-4'>Business Search</h3>
                    </div>
                    <div className="form-group mx-4 my-3">
                        <label htmlFor="Keyword" className="form-label">Keyword*</label>
                        <input type="text" className="form-control" id="Keyword" name='Keyword' required />
                    </div>
                    <div className="row">
                        <div className="col-6 ms-4 my-3">
                            <label htmlFor="inputDistance">Distance</label>
                            <input
                                type="email"
                                className="form-control"
                                id="inputDistance"
                                placeholder="10"
                                required />
                        </div>
                        <div className="col-4 me-4 my-3">
                            <label htmlFor="inputCategory">Category*</label>
                            <select className="form-select" aria-label="Default select example" id="inputCategory" name='inputCategory'>
                                <option value="Default" selected>Default</option>
                                <option value="Arts & Entertainment">Arts & Entertainment</option>
                                <option value="Health & Medical">Health & Medical</option>
                                <option value="Hotels & Travel">Hotels & Travel</option>
                                <option value="Food">Food</option>
                                <option value="Professional Services">Professional Services</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group mx-4 my-3">
                        <label htmlFor="Location" className="form-label">Location*</label>
                        <input type="text" className="form-control" id="Location" name='Location' required />
                    </div>
                    <div className="form-check mx-4 my-1">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Auto-detect my location
                        </label>
                    </div>
                    <div className='row'>
                        <div className="col-4">
                        </div>
                        <div className="col-1 my-2">
                            <button type="button" class="btn btn-danger">Submit</button>
                        
                        </div>
                        <div className="col-1 ms-5 my-2">
                      
                            <button type="button" class="btn btn-primary">Clear</button>
                        </div>
                        <div className="col">
                        </div>

                    </div>

                </div>
            </div>
            <div className="col">
            </div>

        </div>



    )
}

export default Form
