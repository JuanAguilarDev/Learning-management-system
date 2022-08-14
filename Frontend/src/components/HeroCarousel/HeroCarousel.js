import React from 'react'
import './HeroCarousel.css'

export default function HeroCarousel() {
  return (
    <div id="carousel-1" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner h-100">
            <div className="carousel-item active h-100"><img className="carousel__img w-100 d-block position-absolute h-100 fit-cover" src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" alt="Slide Image" />
                <div className="container d-flex flex-column justify-content-center h-100">
                    <div className="row">
                        <div className="col-md-6 col-xl-4 offset-md-2">
                            <div className="carousel__card--description">
                                <h1 className="text-uppercase fw-bold">Biben dum<br />fringi dictum, augue purus</h1>
                                <p className="my-3">Tincidunt laoreet leo, adipiscing taciti tempor. Primis senectus sapien, risus donec ad fusce augue interdum.</p><a className="btn btn-primary btn-lg me-2" role="button" href="#">Button</a><a className="btn btn-outline-primary btn-lg" role="button" href="#">Button</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item h-100"><img className="carousel__img w-100 d-block position-absolute h-100 fit-cover" src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" alt="Slide Image" />
                <div className="container d-flex flex-column justify-content-center h-100">
                    <div className="row">
                        <div className="col-md-6 col-xl-4 offset-md-2">
                            <div className="carousel__card--description">
                                <h1 className="text-uppercase fw-bold">Biben dum<br />fringi dictum, augue purus</h1>
                                <p className="my-3">Tincidunt laoreet leo, adipiscing taciti tempor. Primis senectus sapien, risus donec ad fusce augue interdum.</p><a className="btn btn-primary btn-lg me-2" role="button" href="#">Button</a><a className="btn btn-outline-primary btn-lg" role="button" href="#">Button</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item h-100"><img className="carousel__img w-100 d-block position-absolute h-100 fit-cover" src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" alt="Slide Image" />
                <div className="container d-flex flex-column justify-content-center h-100">
                    <div className="row">
                        <div className="col-md-6 col-xl-4 offset-md-2">
                            <div className="carousel__card--description">
                                <h1 className="text-uppercase fw-bold">Biben dum<br />fringi dictum, augue purus</h1>
                                <p className="my-3">Tincidunt laoreet leo, adipiscing taciti tempor. Primis senectus sapien, risus donec ad fusce augue interdum.</p><a className="btn btn-primary btn-lg me-2" role="button" href="#">Button</a><a className="btn btn-outline-primary btn-lg" role="button" href="#">Button</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div><a className="carousel-control-prev" href="#carousel-1" role="button" data-bs-slide="prev"><span className="carousel-control-prev-icon"></span><span className="visually-hidden">Previous</span></a><a className="carousel-control-next" href="#carousel-1" role="button" data-bs-slide="next"><span className="carousel-control-next-icon"></span><span className="visually-hidden">Next</span></a></div>
        <ol className="carousel-indicators">
            <li className="active" data-bs-target="#carousel-1" data-bs-slide-to="0"></li>
            <li data-bs-target="#carousel-1" data-bs-slide-to="1"></li>
            <li data-bs-target="#carousel-1" data-bs-slide-to="2"></li>
        </ol>
    </div>
  )
}
