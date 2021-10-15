import React, { Component } from 'react';
import { Comment, Header } from 'semantic-ui-react'
import { Row, Col } from 'react-bootstrap';
import { Rating } from 'react-simple-star-rating';


import AddComments from './AddComments';
import "./Comments.css"
import * as FirebaseUtils from '../../../firebase/FirebaseUtils';
import ModalPopup from '../../common/modal/ModalPopup';
import * as commentsUtil from "./CommentsUtil";



class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userComments: [],
            showSuccessModal: false,
            showFailureModal: false,
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

    openSuccessModal = () => {
        this.setState({showSuccessModal: true});
    }

    closeSuccessModal = () => {
        this.setState({showSuccessModal: false});
    }

    openFailureModal = () => {
        this.setState({showFailureModal: true});
    }

    closeFailureModal = () => {
        this.setState({showFailureModal: false});
    }

    userCommentSubmissionResult = (result) => {
        if(result === 'Success') {
            this.openSuccessModal();
            this.getUserCommentsFromDB();
        } else {
            this.openFailureModal();
        }
    }

    render() {
        return (
            <>
            <ModalPopup
                showModal={this.state.showSuccessModal}
                closeModal={() => this.closeSuccessModal()}
                modalTitle={commentsUtil.modalPopupSuccessTitle()}
                modalMessage={commentsUtil.modalPopupReviewSuccessMessage()}
                />
            <ModalPopup //this is the Failure popup
                showModal={this.state.showFailureModal}
                closeModal={() => this.closeFailureModal()}
                modalTitle={commentsUtil.modalPopupFailureTitle()}
                modalMessage={commentsUtil.modalPopupReviewFailureMessage()}
            />
            
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
                    <AddComments
                        userCommentSubmissionResult={this.userCommentSubmissionResult}
                    />
                </Col>
            </Row>
            </>
        )
    }

}

export default Comments;