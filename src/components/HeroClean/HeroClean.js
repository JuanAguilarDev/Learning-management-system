import React from 'react'
import './HeroClean.css'

export default function HeroClean({direction}) {
  return (
    <div className="container py-4 py-xl-5">
        <div className={`${direction} row gy-4 gy-md-0`}>
            <div className="col-md-6">
                <div className="p-xl-5 m-xl-6"><img className="rounded img-fluid w-100 fit-cover hero__img" src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" /></div>
            </div>
            <div className="col-md-5 d-md-flex align-items-md-center">
                <div className="hero__about">
                    <h2 className="text-uppercase fw-bold">Biben dum<br />fringi dictum, augue purus</h2>
                    <p className="my-3">Tincidunt laoreet leo, adipiscing taciti tempor. Primis senectus sapien, risus donec ad fusce augue interdum.</p><a className="btn btn-primary btn-lg me-2" role="button" href="#">Button</a><a className="btn btn-outline-primary btn-lg" role="button" href="#">Button</a>
                </div>
            </div>
        </div>
    </div>
  )
}
