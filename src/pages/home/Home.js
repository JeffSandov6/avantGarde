import React, { Component } from 'react';

import TopLogo from '../../components/home/topLogo/TopLogo';
import ImageCarousel from '../../components/home/imageCarousel/ImageCarousel';
import Benefits from '../../components/home/benefits/Benefits';
import Residential from '../../components/home/residential/Residential';
import Commercial from '../../components/home/commercial/Commercial';
import FloatingButton from '../../components/common/floatingButton/FloatingButton';
import RequestWrapFormDialog from '../../components/requestWrapForm/RequestWrapFormDialog';
import Comments from '../../components/home/comments/Comments';
import Footer from '../../components/home/footer/Footer';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showFloatingButton: true,
            showRequestWrapForm: false,
        }
    }

    openRequestWrapForm = () => {
        this.setState({showRequestWrapForm: true});
    }

    closeRequestWrapForm = () => {
        this.setState({showRequestWrapForm: false});
    }

    render() {
        return (
            <div className="home container-fluid">
                <FloatingButton
                    openRequestWrapForm={this.openRequestWrapForm}
                />
                {this.state.showRequestWrapForm &&
                    <RequestWrapFormDialog
                        closeRequestWrapForm={this.closeRequestWrapForm}
                    />
                }
                <TopLogo />
                <ImageCarousel/>
                <Benefits />
                <Residential />
                <Commercial />
                <Comments />
                <Footer/>
            </div>
        )
    }
}

export default Home;