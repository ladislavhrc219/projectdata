import React from 'react';
// import { Route, Switch } from "react-router-dom";

import { Button } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';




export default class App extends React.Component {


    render() {
        return (
            <>

                <div>
                    <Card style={{backgroundColor: '#f1f1f1'}} >
                    {/* <Nav }}>Something</Nav> */}
                        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                        <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Click for more</Button>
                        </CardBody>
                        {/* <Button color="danger"> Click for more </Button> */}

                    </Card>
                    </div>

                    <div>
                    <Card>
                        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                        <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Click for more</Button>
                        </CardBody>
                    </Card>
                    </div>

            </>

        )
    }
}
