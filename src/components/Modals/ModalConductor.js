import React from 'react'

import NewModal from './NewModal'
import PitchedModal from './PitchedModal';


const ModalConductor = props => {
  switch (props.status) {
    case 'New':
      return <NewModal {...props}/>;
    case 'Pitched':
      return <PitchedModal {...props}/>;
    

    default:
      return null;
  }
};

export default ModalConductor;