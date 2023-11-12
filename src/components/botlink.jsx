import React from 'react'
import { Container} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import {BsArrowUpRightSquare} from 'react-icons/bs'

const Botlink = () => {
  return (
    <>
        <div style={{backgroundColor:'#00FF00', marginBottom:'50px', marginTop:'40px'}}>
            <p style={{color:'#fff'}} className='display-6 text-center'>TRY OUR CHATBOT</p>
            <p style={{color:'#fff'}} className='text-center lead'>for suggestions and recommendation</p>
           <Container>
            <p style={{color:'#fff'}} className='text-center'>An Ayurvedic chatbot for symptom matching and recommend appropriate Ayurvedic medicines, along with AI-generated short descriptions.</p>
            <div style={{padding:'30px'}} className='text-center'>
            <Button size="lg" variant="outline-success">TRY OUT <sup><BsArrowUpRightSquare /></sup></Button>
            </div>
            </Container>       
        </div>
    </>
  )
}

export default Botlink