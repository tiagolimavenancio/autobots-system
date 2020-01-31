import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as PartsActions from '../../../store/ducks/Parts/actions';

import CustomForm from '../../../components/CustomForm';

function Edit(props) {

  const { parts } = props;

  useEffect(() => {
    async function fetchPart() {
      await props.showPartAsync(props.match.params.id)      
    }
    fetchPart();
  }, [props.match.params.id]);

  async function onHandleSubmit(part) {
    await props.editPartAsync(props.match.params.id, part)    
    setTimeout(() => {
      props.history.push('/');  
    }, 300)     
  }

  function onBack() {
    props.history.goBack()
  }

  if(parts.isLoading) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  return (
    <CustomForm onSubmit={onHandleSubmit} onBack={onBack} part={parts.part}/>
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


export default connect(mapStateToProps, mapDispatchToProps)(Edit);
