import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import Form from '../components/Form/Form'

export default function Login() {
  return (
    <>
        <Navbar active={true}></Navbar>
        <Form form_title={'Welcome back'} form_description={'Aprende algo nuevo cada dia. '}></Form>
        <Footer></Footer>
    </>
  )
}
