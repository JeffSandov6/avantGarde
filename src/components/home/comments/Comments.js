import React, { Component } from 'react';
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import { Row, Col } from 'react-bootstrap';



class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <>
            <div style={{ height: '10vh' }}></div>

            <Row>
                <Col>
                    <Comment.Group>
                        <Header as='h3' dividing>
                            Comments
                        </Header>

                        <Comment>
                        <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
                        <Comment.Content>
                            <Comment.Author as='a'>Matt</Comment.Author>
                            <Comment.Metadata>
                            <div>Today at 5:42PM</div>
                            </Comment.Metadata>
                            <Comment.Text>How artistic!</Comment.Text>
                            <Comment.Actions>
                            <Comment.Action>Reply</Comment.Action>
                            </Comment.Actions>
                        </Comment.Content>
                        </Comment>

                        <Comment>
                        {/* <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' /> */}
                        <Comment.Content>
                            <Comment.Author as='a'>Elliot Fu</Comment.Author>
                            <Comment.Metadata>
                            <div>Yesterday at 12:30AM</div>
                            </Comment.Metadata>
                            <Comment.Text>
                            <p>This has been very useful for my research. Thanks as well!</p>
                            </Comment.Text>
                            <Comment.Actions>
                            <Comment.Action>Reply</Comment.Action>
                            </Comment.Actions>
                        </Comment.Content>
                        <Comment.Group>
                            <Comment>
                            <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
                            <Comment.Content>
                                <Comment.Author as='a'>Jenny Hess</Comment.Author>
                                <Comment.Metadata>
                                <div>Just now</div>
                                </Comment.Metadata>
                                <Comment.Text>Elliot you are always so right :)</Comment.Text>
                                <Comment.Actions>
                                <Comment.Action>Reply</Comment.Action>
                                </Comment.Actions>
                            </Comment.Content>
                            </Comment>
                        </Comment.Group>
                        </Comment>

                        <Comment>
                        <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
                        <Comment.Content>
                            <Comment.Author as='a'>Joe Henderson</Comment.Author>
                            <Comment.Metadata>
                            <div>5 days ago</div>
                            </Comment.Metadata>
                            <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
                            <Comment.Actions>
                            <Comment.Action>Reply</Comment.Action>
                            </Comment.Actions>
                        </Comment.Content>
                        </Comment>
                        <Form reply>
                            <Form.TextArea />
                            <Button content='Add Reply' labelPosition='left' icon='edit' primary />
                        </Form>
                    </Comment.Group>

                </Col>
                <Col>
                    <Form reply>
                        <Form.TextArea />
                        <Button content='Add Reply' labelPosition='left' icon='edit' primary />
                    </Form>
                </Col>
            </Row>
            </>
        )
    }

}

export default Comments;