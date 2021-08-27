import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import './Benefits.css';
import easyToInspectIcon from './Easy-to-Inspect.png';
import fireRetardantIcon from './Fire-Retardant-Icon.png';
import secureYourRoofIcon from './Secure-Your-Roof.png';
import slipResistantIcon from './Slip-Resistant-Icon.png';
import tearResistantIcon from './Tear-Resistant-Icon.png';
import uvProtectionIcon from './UV-Protection-Icon.png';

class Benefits extends Component {
    render() {
        return (
            <>
                <Row className="no-gutters">
                    <Col>
                        <img
                            src={fireRetardantIcon}
                            alt="missing"
                            style={{width: '50%', height: '50%'}}
                        />
                        <div className="benefits-header">
                            {'Fire Retardant'}
                        </div>
                        <div className="benefits-description">
                            12 mil fire retardant membrane meets or exceeds ASTM E84 specifications
                        </div>
                    </Col>
                    <Col>
                        <img
                            src={slipResistantIcon}
                            alt="missing"
                            style={{width: '50%', height: '50%'}}
                        />
                        <div className="benefits-header">
                            {'Slip Resistant'}
                        </div>
                        <div className="benefits-description">
                            25% MORE slip resistant and more elastic than any similar membrane in the market
                        </div>
                    </Col>
                    <Col>
                        <img
                            src={tearResistantIcon}
                            alt="missing"
                            style={{width: '50%', height: '50%'}}
                        />
                        <div className="benefits-header">
                            {'Tear Resistant'}
                        </div>
                        <div className="benefits-description">
                            50% MORE tear resistant than any other 12 mil shrink film on the market
                        </div>
                    </Col>
                    <Col>
                        <img
                            src={uvProtectionIcon}
                            alt="missing"
                            style={{width: '50%', height: '50%'}}
                        />
                        <div className="benefits-header">
                            {'UV Protection'}
                        </div>
                        <div className="benefits-description">
                            18 month UV rating with semi-transparent properties to prevent mold
                        </div>
                    </Col>
                    <Col>
                        <img
                            src={easyToInspectIcon}
                            alt="missing"
                            style={{width: '50%', height: '50%'}}
                        />
                        <div className="benefits-header">
                            {'Easy To Inspect'}
                        </div>
                        <div className="benefits-description">
                            Membrane can be cut open for inspectors to examine the roof in its post-loss state
                        </div>
                    </Col>
                    <Col>
                        <img
                            src={secureYourRoofIcon}
                            alt="missing"
                            style={{width: '50%', height: '50%'}}
                        />
                        <div className="benefits-header">
                            {'Secured Roof'}
                        </div>
                        <div className="benefits-description">
                            Roof remains preserved in its post-loss conditions
                        </div>
                    </Col>
                    
                </Row>
            </>
        )
    }
}

export default Benefits;