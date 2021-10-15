import React, { Component } from 'react';
import { Comment, Header } from 'semantic-ui-react'
import { Row, Col } from 'react-bootstrap';
import { Rating } from 'react-simple-star-rating';


import AddComments from './AddComments';
import "./Comments.css"
import * as FirebaseUtils from '../../../firebase/FirebaseUtils';



class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userComments: [],
        }
    }

    componentDidMount() {
        //TODO: uncomment when the site goes live
        this.getUserCommentsFromDB();
    }

    async getUserCommentsFromDB() {
        const userComments = await FirebaseUtils.getUserComments();
        this.setState({userComments: userComments});
    }

    render() {
        return (
            <>
            <div style={{ height: '10vh' }}></div>

            <Row>
                <Col>
                    <Comment.Group>
                        <Header as='h3' dividing>
                            Reviews
                        </Header>
                        <div className="comment-div">
                            {this.state.userComments.map((curComment, index) => (
                                <Row className="justify-content-center comment-row-padding" key={index}>
                                    <Comment>
                                    <Comment.Avatar src='https://semantic-ui.com/images/avatar2/small/elyse.png'/>
                                    <Comment.Content>
                                        <Comment.Author as='a'>{curComment.name}</Comment.Author>
                                        <Comment.Metadata>
                                        <Rating 
                                            ratingValue={curComment.rating}
                                            size="15"
                                        />
                                        </Comment.Metadata>
                                        <Comment.Text>{curComment.comment}</Comment.Text>
                                        <Comment.Metadata>
                                        <div>{curComment.date}</div>
                                        </Comment.Metadata>
                                    </Comment.Content>
                                    </Comment>
                                    <div style={{ height: '5px' }}></div>
                                </Row>
                            ))}
                        </div>
                    </Comment.Group>
                </Col>
                <Col>
                    <AddComments/>
                </Col>
            </Row>
            </>
        )
    }

}

export default Comments;