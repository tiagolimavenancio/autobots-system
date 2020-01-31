import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Button from 'react-bootstrap/Button';
import * as PartsActions from '../../store/ducks/Parts/actions';

function PartItem(props) {

    const { part } = props;

    function onDelete() {
        props.deletePartsAsync(part._id)
    }

    return (
        <tr>
            <td>{part._id}</td>
            <td>{part.name}</td>
            <td>{part.weight}</td>
            <td>{part.value}</td>
            <td>{part.kind}</td>
            <td>
                <Link className="edit-link" to={"/edit-part/" + part._id}>Edit</Link>
                <Button onClick={onDelete} size="sm" variant="danger">Delete</Button>
            </td>
        </tr> 
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

export default connect(mapStateToProps, mapDispatchToProps)(PartItem)
