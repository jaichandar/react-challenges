import './grid.css';

const CheckOutPage = () => {
    return (
        <div className="container" style={{ maxWidth: '1000px', padding: '10px 0px' }}>
            <div className="row">
                <div className="col-9">
                    <h4 className="text-secondary">Billing Address</h4>
                    <div className='row'>
                        <div className='col-6'>
                            <span>First Name</span>
                            <input 
                                className='input-field'
                                placeholder='Enter First Name'
                            />
                        </div>
                        <div className='col-6'>
                            <span>Last Name</span>
                            <input 
                                className='input-field'
                                placeholder='Enter Last Name'
                            />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col mt-2'>
                            <span>Username</span>
                            <input 
                                className='input-field'
                                placeholder='Enter Username'
                            />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col mt-2'>
                            <span>Email(Optional)</span>
                            <input 
                                className='input-field'
                                placeholder='Enter Email'
                            />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col mt-2'>
                            <span>Address</span>
                            <input 
                                className='input-field'
                                placeholder='Enter Address'
                            />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col mt-2'>
                            <span>Address 2 (Optional)</span>
                            <input 
                                className='input-field'
                                placeholder='Apartment or suite'
                            />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-4 mt-2'>
                            <span style={{ margin: '3px 0px', display: 'block' }}>Country</span>
                            <select style={{ width: '100%' }}>
                                <option></option>
                            </select>
                        </div>
                        <div className='col-4 mt-2'>
                            <span style={{ margin: '3px 0px', display: 'block' }}>State</span>
                            <select style={{ width: '100%' }}>
                                <option></option>
                            </select>
                        </div>
                        <div className='col-4 mt-2'>
                            <span>Zip</span>
                            <input 
                                className='input-field'
                                placeholder='Enter Zipcode'
                            />
                        </div>
                    </div>
                    <hr />
                    <div className='d-flex gap-2'>
                        <input 
                            type='checkbox'
                            style={{ padding: '5px' }}
                        />
                        <p className='mb-0'>Shipping address is the same as my billing address</p>
                    </div>
                    <div className='d-flex gap-2'>
                        <input 
                            type='checkbox'
                            style={{ padding: '5px' }}
                        />
                        <p className='mb-0'>Save this information for next time</p>
                    </div>
                    <hr />
                    <div>
                        <h5>Payment</h5>

                        <div className='d-flex gap-2'>
                            <input 
                                type='radio'
                            />
                            <p className='mb-0'>Credit Card</p>
                        </div>
                        <div className='d-flex gap-2'>
                            <input 
                                type='radio'
                            />
                            <p className='mb-0'>Debit Card</p>
                        </div>
                        <div className='d-flex gap-2'>
                            <input 
                                type='radio'
                            />
                            <p className='mb-0'>PayPal</p>
                        </div>
                    </div>
                    <div className='row mt-2'>
                        <div className='col-6'>
                            <span>Name On Card</span>
                            <input 
                                className='input-field'
                            />
                            <p className='text-secondary mb-0'>Full name as displayed on card</p>
                        </div>
                        <div className='col-6'>
                            <span>Credit Card Number</span>
                            <input 
                                className='input-field'
                            />
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col-6'>
                            <div className='row'>
                                <div className='col-6'>
                                    <span>Expiration</span>
                                    <input 
                                        className='input-field'
                                    />
                                </div>
                                <div className='col-6'>
                                    <span>CVV</span>
                                    <input 
                                        className='input-field'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <button className='submit-btn'>Submit</button>
                </div>
                <div className="col-3">
                    <div className='d-flex justify-content-between align-items-center p-1'>
                        <h6 className='text-primary mb-0'>Your Cart</h6>
                        <div className='tags'>
                            <p className='item'>3</p>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between p-2 mt-2' style={{ border: '1px solid #d3d3d3', borderTopLeftRadius: '5px', borderTopRightRadius: '5px' }}>
                        <div>
                            <p className='mb-0'>Product name</p>
                            <p className='mb-0 text-secondary'>Brief Description</p>
                        </div>
                        <div>
                            <p>$12</p>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between p-2' style={{ border: '1px solid #d3d3d3' }}>
                        <div>
                            <p className='mb-0'>Second Product</p>
                            <p className='mb-0 text-secondary'>Brief Description</p>
                        </div>
                        <div>
                            <p>$8</p>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between p-2' style={{ border: '1px solid #d3d3d3' }}>
                        <div>
                            <p className='mb-0'>Third Product</p>
                            <p className='mb-0 text-secondary'>Brief Description</p>
                        </div>
                        <div>
                            <p>$5</p>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between p-2' style={{ background: '#f8f9fa', border: '1px solid #d3d3d3'}}>
                        <div>
                            <p className='mb-0' style={{ color: '#198754' }}>Promo Code</p>
                            <p className='mb-0' style={{ color: '#198754' }}>EXAMPLE CODE</p>
                        </div>
                        <div>
                            <p style={{ color: 'green' }}>-$5</p>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between p-2' style={{ background: '#f8f9fa', border: '1px solid #d3d3d3', borderBottomLeftRadius: '5px', borderBottomRightRadius: '5px' }}>
                        <div>
                            <p className='mb-0'>Total (USD)</p>
                        </div>
                        <div>
                            <p>$20</p>
                        </div>
                    </div>

                    <div className='d-flex justify-content-center p-2 mt-3' style={{ background: '#f8f9fa', border: '1px solid #d3d3d3' }}>
                        <div style={{ width: '100%', display: 'flex', justifyContent:'center' }}>
                            <input 
                                placeholder='Promo code'
                                style={{ width: '70%' }}
                                className='input'
                            />
                            <button className='redeem-btn' style={{ width: 'fit-content' }}>Redeem</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckOutPage;