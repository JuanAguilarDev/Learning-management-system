import React from 'react'
import Register from './Register/Register'

export default function Form({form_title, form_description, register = false}) {
  return (
    <section className='py-4'>
        <div className='container'>
            <div className='row my-3'>
                <div className='col-6 offset-3 text-center'>
                    <h2>{form_title}</h2>
                    <p className='text-muted'>{form_description}</p>
                </div>
                <div className='col-6 offset-3'>
                    <div className='card mb-5'>
                        <div className='card-body'>
                            <div className='my-4 bs-icon-circle d-flex justify-content-center'>
                                <img src="" alt="icon_profile"/>
                            </div>
                            <form className='text-center' method='post'>
                                {register ?  <Register></Register> : <></>}
                                <div className='mb-3'>
                                    <input className='form-control py-2' type="email" name="email" placeholder='Email' id="name"/>
                                </div>
                                <div className='mb-3'>
                                    <input className='form-control' type="password" name="password" placeholder='Password' id="password"/>
                                </div>
                                <div className='mb-3'>
                                    <button className='form-control btn btn-primary' type="button" name="">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
