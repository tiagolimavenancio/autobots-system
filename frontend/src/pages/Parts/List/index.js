import React, { useEffect } from 'react';
import { Table, Container, Button } from "react-bootstrap";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PartsActions from '../../../store/ducks/Parts/actions';
import PartItem from '../../../components/PartItem';

import './styles.css';

function List(props) {

  const { parts } = props
  
  useEffect(() => {
    async function fetchData() {      
      await props.fetchPartsAsync();      
    }
    fetchData();    
  }, [])

  function onCreate() {
    props.history.push('/create-part')
  }

  return (
    <div>
        <Container className='section-button'>
          <Button variant='danger' onClick={onCreate}>
            Create
          </Button>     
        </Container>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Weight</th>
              <th>Value</th>
              <th>Kind</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              parts.data.map((res, i) => {
                return <PartItem part={res} key={i} />
              })
            }
          </tbody>
        </Table>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    parts: state.parts
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Object.assign({}, PartsActions), dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(List)