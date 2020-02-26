import React from 'react';
import { Container, Row , Col } from 'reactstrap';
import { Button, Label, Input, FormGroup } from 'reactstrap';


const NewLead = () => {
    const eventSn = () => {
        alert("Submit and New Lead")
    }
    const eventS = () => {
        alert("Submit Lead")
    }
    const eventC = () => {
        alert("Cancelled!!")
    }
  return (
    <Container className="my-5 px-5 py-4 border border-secondary bg-light">
        <Row className="mt-2">
            <Col>
                <h2>New Lead</h2>
            </Col>
        </Row>
        <Row className="mt-2">
            <Col sm="7">
                <Label>Title*</Label>
                <Input placeholder="Title" />
                <Label className="mt-2">Description</Label>
                <Input type="textarea" rows={7}/>
            </Col>
            <Col sm="5">
                <Label>Source</Label>
                <Input type="select">
                    <option>1</option>
                    <option>2</option>
                </Input>
                <Label className="mt-2">URL</Label>
                <Input placeholder="URL" />
                <Label className="mt-2">Domain</Label>
                <Input type="select">
                    <option>1</option>
                    <option>2</option>
                </Input>
                <Label className="mt-2">Keywords / Tags</Label>
                <Input placeholder="Keywords or Tags" />
            </Col>
        </Row>
        <Row className="mt-5">
            <Col sm="7" className="mt-2">
                <Row>
                    <Col>
                        <Label>Attachment</Label><br/>
                    </Col>
                    <Col>
                        <Label className="btn btn-primary px-4" for="addfile">Add</Label>
                        <Input type="file" id="addfile" className="d-none"/>
                    </Col>
                </Row> 
                <Row className="mt-2">
                    <Col>
                        <Label>Estimated Budget ($)</Label>
                    </Col>
                    <Col>
                        <Input placeholder="Budget"/>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col>
                        <Label>Referred By</Label>
                    </Col>
                    <Col>
                        <Input placeholder="Referred By"/>
                    </Col>
                </Row>
            </Col>
            <Col sm="5" className="mt-2">
                <Label>Technology</Label>
                <Input type="select">
                    <option>1</option>
                    <option>2</option>
                </Input>
                <Row className="mt-2">
                    <Col>
                        <Label>Assignee*</Label><br/>
                        <Label className="ml-3">
                            <Input type="radio" name="radio1"/>Assign to
                        </Label>
                    </Col>
                    <Col className="mt-3">
                        <Input type="select">
                            <option>1</option>
                            <option>2</option>
                        </Input>
                    </Col>
                </Row>
            </Col>
        </Row><hr className="mt-5"/>
        <FormGroup tag="fieldset">
            <Row className="mt-4">
                <Col xs="5">
                    <legend>Prospect Details</legend>
                </Col>
                <Col xs="3">
                    <a href="#">Existing?</a>
                </Col><Col sm="6"></Col>
            </Row>
            <Row className="mt-2 ml-3">
                <Col sm="6">
                    <Row className="mt-2">
                        <Col sm="5">
                            <Label>Full Name</Label>
                        </Col>
                        <Col sm="6">
                            <Input placeholder="Full Name"/>
                        </Col>
                        <Col sm="1"></Col>
                    </Row>
                    <Row className="mt-2">
                        <Col sm="5">
                            <Label>Email</Label>
                        </Col>
                        <Col sm="6">
                            <Input placeholder="Email"/>
                        </Col>
                        <Col sm="1">+</Col>
                    </Row>
                    <Row className="mt-2">
                        <Col sm="5">
                            <Label>Company</Label>
                        </Col>
                        <Col sm="6">
                            <Input placeholder="Company"/>
                        </Col>
                        <Col sm="1"></Col>
                    </Row>
                    <Row className="mt-2">
                        <Col sm="5">
                            <Label>Designation</Label>
                        </Col>
                        <Col sm="6">
                            <Input placeholder="Designation"/>
                        </Col>
                        <Col sm="1"></Col>
                    </Row>
                    <Row className="mt-2">
                        <Col sm="5">
                            <Label>Skype ID</Label>
                        </Col>
                        <Col sm="6">
                            <Input placeholder="Skype ID"/>
                        </Col>
                        <Col sm="1"></Col>
                    </Row>                   
                </Col>
                <Col sm="6">
                    <Row className="mt-2">
                        <Col sm="5">
                            <Label>Street Address</Label>
                        </Col>
                        <Col sm="6">
                            <Input placeholder="Street Address"/>
                        </Col>
                        <Col sm="1"></Col>
                    </Row>
                    <Row className="mt-2">
                        <Col sm="5">
                            <Label>City</Label>
                        </Col>
                        <Col sm="6">
                            <Input placeholder="City"/>
                        </Col>
                        <Col sm="1"></Col>
                    </Row>
                    <Row className="mt-2">
                        <Col sm="5">
                            <Label>State</Label>
                        </Col>
                        <Col sm="6">
                            <Input placeholder="State"/>
                        </Col>
                        <Col sm="1"></Col>
                    </Row>
                    <Row className="mt-2">
                        <Col sm="5">
                            <Label>Country</Label>
                        </Col>
                        <Col sm="6">
                            <Input placeholder="Country"/>
                        </Col>
                        <Col sm="1"></Col>
                    </Row>
                    <Row className="mt-2">
                        <Col sm="5">
                            <Label>Phone Number</Label>
                        </Col>
                        <Col sm="6">
                            <Input placeholder="Phone Number"/>
                        </Col>
                        <Col sm="1">+</Col>
                    </Row>
                </Col>
            </Row>                    
        </FormGroup>            
            <Row>
                <Col sm="2" className="mt-2">
                    <Button color="primary" className="sbtn" onClick={eventSn}>Submit and New</Button>
                </Col>
                <Col sm="2" className="mt-2">
                    <Button color="success" className="sbtn" onClick={eventS}>Submit</Button>
                </Col>
                < Col sm="2" className="mt-2">
                    <Button color="danger" className="sbtn" onClick={eventC}>Cancel</Button>
                </Col>
            </Row>
    </Container>
    );
}
export default NewLead