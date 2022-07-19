import React, { Component } from 'react';


import ParallaxImage from '../../components/home/parallaxImage/ParallaxImage'
import Gallery from '../../components/home/gallery/Gallery';
import DesignServices from '../../components/home/designServices/DesignServices';

//OLD STUFF
import TopLogo from '../../components/home/topLogo/TopLogo';
import ImageCarousel from '../../components/home/imageCarousel/ImageCarousel';
import Benefits from '../../components/home/benefits/Benefits';
import Residential from '../../components/home/residential/Residential';
import Commercial from '../../components/home/commercial/Commercial';
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

    // openRequestWrapForm = () => {
    //     this.setState({showRequestWrapForm: true});
    // }

    // closeRequestWrapForm = () => {
    //     this.setState({showRequestWrapForm: false});
    // }

    render() {
        return (
            <div className="home container-fluid">
                <div className="parallax-image-background">
                    <div style={{
                        width: '90%',
                        margin: '0 auto',
                    }}>
                        <ParallaxImage />
                    </div>
                </div>
                <Gallery />
                <DesignServices />
                {/* <ParallaxImage /> */}
                {/* <FloatingButton
                    openRequestWrapForm={this.openRequestWrapForm}
                />
                {this.state.showRequestWrapForm &&
                    <RequestWrapFormDialog
                        closeRequestWrapForm={this.closeRequestWrapForm}
                    />
                } */}
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