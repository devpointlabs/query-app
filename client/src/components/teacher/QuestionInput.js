import React, { useState, useEffect, } from 'react'
import axios from 'axios'
import { Form, } from 'semantic-ui-react'


const QuestionInput = (props) => {
    const [name, setName] = useState('')

   
        const handleSubmit = (e) => {  
            props.updateName(name)
        }
        
        const handleChange = (e) => {
            e.preventDefault();
        setName( e.target.value)
    }



    return (
        <>
       
            <Form onBlur={handleSubmit} >
              <Form.Input 
                placeholder='Question'
                style={{width: "500px"}}
                
                value={name}
                onChange={handleChange}
             />
   
          </Form>
        
        </>
    )


}

export default QuestionInput; 
