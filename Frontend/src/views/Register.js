import React from 'react'
import Footer from '../components/Footer/Footer'
import Form from '../components/Form/Form'
import Navbar from '../components/Navbar/Navbar'

export default function Register() {
  return (
    <>
        <Navbar active={true}></Navbar>
        <Form form_title={'Welcome back'} form_description={'Aprende algo nuevo cada dia. '} register={true}></Form>
        <Footer></Footer>
    </>
  )
}

