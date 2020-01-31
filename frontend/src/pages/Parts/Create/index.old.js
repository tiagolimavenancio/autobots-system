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
                    defaultValue={kind} 
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