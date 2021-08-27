import React from 'react';
import Hidden from '@material-ui/core/Hidden'
import withWidth from '@material-ui/core/withWidth';
import PropTypes from 'prop-types';

import Home from './Home';
import HomeMobile from './HomeMobile';



function HomeResponsive(props) {
    return (
        <div>
            <Hidden smDown>
                <Home/>
            </Hidden>
            <Hidden mdUp>
                <Home/>
            </Hidden>
        </div>
    )
}

HomeResponsive.propTypes = {
    width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
}

export default withWidth()(HomeResponsive);