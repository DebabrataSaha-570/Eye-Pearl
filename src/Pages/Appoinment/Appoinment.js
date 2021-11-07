import React from 'react';

const Appoinment = () => {
    const handleFormSubmit = (event) => {
        event.preventDefault()
    }
    return (
        <>
            <section className="container">

                <h2 className="text-center my-3">Fill in the Form Below to get appoinment</h2>
                <form onSubmit={handleFormSubmit} className="w-75 p-2 mb-5 mx-auto">
                    <div className="row">
                        <div className="col-md-5">
                            <input className="form-control" placeholder="Your Name" type="text" name="" id="" />
                        </div>
                        <div className="col-md-5">
                            <input className="form-control" placeholder="Your Phone" type="number" name="" id="" />
                        </div>

                    </div>

                    <div className="row mt-3" >
                        <div className="col-md-5">
                            <input className="form-control" placeholder="Your Email" type="text" name="" id="" />
                        </div>
                        <div className="col-md-5">
                            <input className="form-control" placeholder="Preffered Date" type="text" name="" id="" />
                        </div>

                    </div>

                    <div className="row my-3">
                        <div className="col-md-10">
                            <div class="input-group ">
                                <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                                    <option selected>Select Doctor</option>
                                    <option value="1">Vet-1</option>
                                    <option value="2">Vet-2</option>
                                    <option value="3">Vet-3</option>
                                </select>

                            </div>
                        </div>
                    </div>

                    <div className="row my-3">
                        <div className="col-md-10">
                            <div class="input-group ">
                                <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                                    <option selected>Select Service</option>
                                    <option value="1">Service 1</option>
                                    <option value="2">Service 2</option>
                                    <option value="3">Service 3</option>
                                </select>

                            </div>
                        </div>
                    </div>

                    <div className="row my-3">
                        <div className="col-md-10">

                            <textarea placeholder="Your Message" class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                        </div>
                    </div>
                    <input className="btn btn-primary" type="submit" value="Submit" />
                </form>
            </section>
        </>
    );
};

export default Appoinment;