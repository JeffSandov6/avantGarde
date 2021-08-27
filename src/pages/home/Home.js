import React, { Component } from 'react';

import TopLogo from '../../components/home/topLogo/TopLogo';
import ImageCarousel from '../../components/home/imageCarousel/ImageCarousel';
import Benefits from '../../components/home/benefits/Benefits';

class Home extends Component {
    render() {
        return (
            <div className="home container-fluid">
                <TopLogo />
                <ImageCarousel/>
                <Benefits />
            </div>
        )
    }
}

export default Home;