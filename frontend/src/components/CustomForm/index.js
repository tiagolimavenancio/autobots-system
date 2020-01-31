import React, { useState, useEffect } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';

function CustomForm(props) {

    const kinds = ['Geral', 'Interior', 'Exterior'];

    const [name, setName] = useState('');
    const [weight, setWeight] = useState(0);
    const [value, setValue] = useState(0);
    const [kind, setKind] = useState(kinds[0]);
    const [validated, setValidated] = useState(false);
    
    const { part } = props;

    useEffect(() => {
        if(part) {
            setName(part.name)
            setWeight(part.weight)
            setValue(part.value)
            setKind(part.kind)            
        }        
    }, [part.name, part.weight, part.value, part.kind]);

    async function handleSubmit(e) {
        e.preventDefault();
        const form = e.currentTarget;
        
        if(form.checkValidity() === false) {
          e.stopPropagation();          
        } else {    
            const data = {
                name,
                weight: parseFloat(weight),
                value: parseFloat(value),
                kind
            }
            await props.onSubmit(data);        
        }

        setValidated(true);
      }
    
      function onBack() {
        props.onBack()
      }

    return (
        <div className='form-wrapper'>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group controlId="Name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                        required 
                        type="text" 
                        value={name} 
                        onChange={e => setName(e.target.value)}                                      
                    />                  
                    <Form.Control.Feedback type='invalid'>
                        Name is a required field
                    </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="Weight">
                    <Form.Label>Weight</Form.Label>
                    <InputGroup>              
                        <Form.Control 
                        required 
                        type="text" 
                        value={weight} 
                        onChange={e => setWeight(e.target.value)}                       
                        />
                        <InputGroup.Append>
                        <InputGroup.Text>g</InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>
                    <Form.Control.Feedback type='invalid'>
                        Weight is a required field
                    </Form.Control.Feedback>
                    </Form.Group>

                
                    <Form.Group controlId="Value">
                    <Form.Label>Value</Form.Label>
                    <InputGroup>
                        <Form.Control 
                        required 
                        type="text" 
                        value={value} 
                        onChange={e => setValue(e.target.value)}                       
                        />
                        <InputGroup.Append>
                        <InputGroup.Text>R$</InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>
                    <Form.Control.Feedback type='invalid'>
                        Value is a required field
                    </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="Kind">
                    <Form.Label>Kind</Form.Label>
                    <Form.Control 
                        required 
                        as='select' 
                        defaultValue={part.kind || kind} 
                        onChange={e => setKind(e.target.value)}                    
                    >
                        {
                            kinds.map(k => <option key={k} value={k}>{k}</option>)
                        }
                    </Form.Control>
                    </Form.Group>

                    <Button variant='danger' size='lg' block='block' type='submit'>
                        Submit
                    </Button>
                    <Button onClick={onBack} variant='light' size='lg' block='block'>
                        Back
                    </Button>
                </Form>
        </div>
    );
}

CustomForm.propTypes = {
    editMode: PropTypes.bool,
    part: PropTypes.object
}

CustomForm.defaultProps = {
    editMode: false,
    part: {}
}

export default CustomForm;