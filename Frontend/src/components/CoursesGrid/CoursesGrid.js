import React from 'react'
import './CoursesGrid.css'

export default function CoursesGrid() {
  return (
    <div class="container py-4 py-xl-5">
        <div class="row mb-5">
            <div class="col-md-8 col-xl-6 text-center mx-auto">
                <h2>Courses</h2>
                <p class="w-lg-50">Find available courses of your interest and learn something every day and become who you want to be.</p>
            </div>
        </div>
        <div class="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
            <div class="col">
                <div><img class="rounded img__grid img-fluid d-block w-100 fit-cover" src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" />
                    <div class="py-4">
                        <h4>Lorem libero donec</h4>
                        <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div><img class="rounded img__grid img-fluid d-block w-100 fit-cover" src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" />
                    <div class="py-4">
                        <h4>Lorem libero donec</h4>
                        <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div><img class="rounded img__grid img-fluid d-block w-100 fit-cover" src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" />
                    <div class="py-4">
                        <h4>Lorem libero donec</h4>
                        <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div><img class="rounded img__grid img-fluid d-block w-100 fit-cover" src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" />
                    <div class="py-4">
                        <h4>Lorem libero donec</h4>
                        <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
