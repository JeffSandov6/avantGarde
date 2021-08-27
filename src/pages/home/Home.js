import React, { Component } from 'react';

import TopLogo from '../../components/home/topLogo/TopLogo';
import ImageCarousel from '../../components/home/imageCarousel/ImageCarousel';
import Benefits from '../../components/home/benefits/Benefits';
import Residential from '../../components/home/residential/Residential';
import Commercial from '../../components/home/commercial/Commercial';

class Home extends Component {
    render() {
        return (
            <div className="home container-fluid">
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