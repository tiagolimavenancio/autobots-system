import { combineReducers } from 'redux'

import parts from './Parts';
import simulations from './Simulations';

export default combineReducers({
    parts,
    simulations
});