import React, { useState } from 'react';
import { Button, Modal, ModalHeader,Container, Col, ModalBody, ModalFooter, Label,Input, Row} from 'reactstrap';

const PitchedModal = (props) => {
const {
labelText
} = props;

const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);

  const toggle = () => setModal(!modal);
  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);   
  }
  const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
  }	
  return (
    <div>
        <Label className="Radio-label">{labelText}</Label>
            <Input type="radio" name="new" onClick={toggle}/>
                 <Modal className="modal-dailog modal-lg" isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle}>{labelText}</ModalHeader>
                    <ModalBody>     
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-8">
                                <div>
                                <Row>
                                <Col> nfosys Limited is an Indian multinational corporation that provides business consulting, information technology and outsourcing services. It has its headquarters in Bangalore, Karnataka, India</Col>
                                </Row>
                                </div>
                                    <br/>
		                                        <div id="margin1">
                                                    <label className="text-center">Prospect Detail</label>
                                                 </div> 
                                                 <textarea
                                                    id="description_new"
                                                        rows="4" cols="40" required
                                                /*  let value = this.state.data.map(e=>JSON.stringify(e).replace(/{|}/g,'')).join(',\n');
                                                 <textarea value={value}  defaultValue="val" /> */
                                                    /> 
                                            <div id="margin1" wrap-content>
                                                <labelText id="margin1" > </labelText>
                                            </div><br/><br/><br/>
                                            <Row>
                                                <Col > <Label  for="addfile">Attachments</Label>
                                                        <Input type="file" id="addfile" className="d-none"/></Col>
                                                <Col><Label  for="addfile">ProjectScope,ppt</Label>
                                                        <Input type="file" id="addfile" className="d-none"/></Col>
                                                <Col><Label  for="addfile">NDA docs</Label>
                                                        <Input type="file" id="addfile" className="d-none"/></Col>
                                            
                                            </Row>
                                            
                                </div>
                                <div class="col-sm-4">
                                    <div id="margin1">
                                        <div className="modalbutton1">
                                             <Button> New</Button>
                                        <br/>
                                            <div>
                                            <p>Tags</p>
                                             LMS  training system<br/>
                                             E-learning
                                             Domains
                                            </div>  
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                
            <ModalFooter>
            <Button color="primary" onClick={toggle}>Accept</Button>{' '}
            <Button color="primary" onClick={toggleNested} onClosed={closeAll ? toggle:undefined}>Reject</Button>
                {/*props still need to be made.
                        Hence, complete functionality is still not achieved for second level modal*/}
                        <Modal isOpen={nestedModal} toggle={toggleNested} onClosed={closeAll ? toggle : undefined}>
                                <ModalHeader>Reason For rejection</ModalHeader>
                                    <ModalBody>
                                        <form>
                                        <div id="margin">
                                            <div className="form-group">
                                                <textarea
                                                    className="form-control"
                                                                id="description_new"
                                                                    rows="5" required
                                                                    />
                                                                    <Button color="primary" onClick={toggle}>Submit</Button>
</div>
</div>
                                            </form>
                                                </ModalBody>
                                                    <ModalFooter>
                                                        <Button color="primary" onClick={toggle} >Something</Button>
                                                    </ModalFooter>
                        </Modal>
                    </ModalFooter>
                    </ModalBody>
                </Modal>
            </div>
         );
}
export default PitchedModal;