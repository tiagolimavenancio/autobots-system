import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as PartsActions from '../../../store/ducks/Parts/actions';

import CustomForm from '../../../components/CustomForm';

function Create(props) {
  
  async function onHandleSubmit(part) {   
    await props.createPartAsync(part);      
    setTimeout(() => {
      props.history.push('/');  
    }, 300) 
  }

  function onBack() {
    props.history.goBack()
  }

  return (
    <CustomForm onSubmit={onHandleSubmit} onBack={onBack} />
  );
}

const mapStateToProps = (state) => {
  return {
    parts: state.parts
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Object.assign({}, PartsActions), dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Create);