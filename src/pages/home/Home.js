import React, { Component } from 'react';

import TopLogo from '../../components/home/topLogo/TopLogo';
import ImageCarousel from '../../components/home/imageCarousel/ImageCarousel';
import Benefits from '../../components/home/benefits/Benefits';
import Residential from '../../components/home/residential/Residential';
import Commercial from '../../components/home/commercial/Commercial';
import FloatingButton from '../../components/common/floatingButton/FloatingButton';
import RequestWrapForm from '../../components/requestWrapForm/RequestWrapForm';

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
                    <RequestWrapForm
                        closeRequestWrapForm={this.closeRequestWrapForm}
                    />
                }
                <TopLogo />
                <ImageCarousel/>
                <Benefits />
                <Residential />
                <Commercial />
            </div>
        )
    }
}

export default Home;