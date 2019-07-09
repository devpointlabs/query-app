import React, { useState, useEffect, } from 'react'
import axios from 'axios'
import { Form, } from 'semantic-ui-react'


const QuestionInput = (props) => {
    const [name, setName] = useState('')

   
        const handleSubmit = (e) => {  
            e.preventDefault();
        props.updateName(name)
    }

    const handleChange = (e) => {
        setName( e.target.value)
    }



    return (
        <>
        {console.log('child component:', name)}
            <Form onSubmit={handleSubmit} >
              <Form.Input 
                placeholder='Question'
                
                value={name}
                onChange={handleChange}
             />
   
          </Form>
        
        </>
    )


}

export default QuestionInput; 
