import React from 'react';
import { Container, Row , Col } from 'reactstrap';
import { Label, Input, ListGroup, ListGroupItem } from 'reactstrap';


const Leadboard = () =>{
	return(
		<div>
						
			<Container className="cont_lead mt-5">
				<Row>
					<Col>
						<h1>Lead Dashboard</h1>
						<Container className="mt-4">
							<Row>
								<Col className="mt-3">
									<ListGroup>
										<ListGroupItem color="primary">
											<center>New</center>
										</ListGroupItem>
								        <ListGroupItem>
								        	<Label className="coldivs">LMS System </Label>
								        	<Input type="radio" name="sm"/>
								        </ListGroupItem>
								        <ListGroupItem>
								        	<Label className="coldivs">eLearning</Label>
								        	<Input type="radio" name="sm"/>
								        </ListGroupItem>
								        <ListGroupItem>
								        	<Label className="coldivs">Marketplace</Label>
								        	<Input type="radio" name="sm"/>
								        </ListGroupItem>                          
								      </ListGroup>
								</Col>
								<Col className="mt-3">
									<ListGroup>
										<ListGroupItem color="primary">
											<center>Accepted</center>
										</ListGroupItem>
								        <ListGroupItem>
								        	<Label className="coldivs">LMS System </Label>
								        	<Input type="radio" name="sm"/>
								        </ListGroupItem>
								        <ListGroupItem>
								        	<Label className="coldivs">eLearning</Label>
								        	<Input type="radio" name="sm"/>
								        </ListGroupItem>
								        <ListGroupItem>
								        	<Label className="coldivs" name="sm">Marketplace</Label>
								        	<Input type="radio"/>
								        </ListGroupItem>
								      </ListGroup>
								</Col>
								<Col className="mt-3">
									<ListGroup>
										<ListGroupItem color="primary">
											<center>Pitched</center>
										</ListGroupItem>
								        <ListGroupItem>
								        	<Label className="coldivs">LMS System </Label>
								        	<Input type="radio" name="sm"/>
								        </ListGroupItem>
								        <ListGroupItem>
								        	<Label className="coldivs">eLearning</Label>
								        	<Input type="radio" name="sm"/>
								        </ListGroupItem>
								        <ListGroupItem>
								        	<Label className="coldivs">Marketplace</Label>
								        	<Input type="radio" name="sm"/>
								        </ListGroupItem>
								      </ListGroup>
								</Col>
								<Col className="mt-3">
									<ListGroup>
										<ListGroupItem color="primary">
											<center>Response Generated</center>
										</ListGroupItem>
								        <ListGroupItem>
								        	<Label className="coldivs">LMS System </Label>
								        	<Input type="radio" name="sm"/>
								        </ListGroupItem>
								        <ListGroupItem>
								        	<Label className="coldivs">eLearning</Label>
								        	<Input type="radio" name="sm"/>
								        </ListGroupItem>
								        <ListGroupItem>
								        	<Label className="coldivs">Marketplace</Label>
								        	<Input type="radio" name="sm"/>
								        </ListGroupItem>
								      </ListGroup>
								</Col>
							</Row>
						</Container>
					</Col>
				</Row>
			</Container>
		</div>
	)
}
export default Leadboard