import React, { Component } from 'react';
import { Row } from 'reactstrap';
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";
import './ImageCarousel.css';


class ImageCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            responsive: {
                desktop: {
                    breakpoint: { max: 3000, min: 1024},
                    items: 1,
                    partialVisibilityGutter: 0,
                },
                mobile: {
                    breakpoint: {max: 464, min: 0},
                    items: 1,
                    partialVisibilityGutter: 0,

                },
                tablet: {
                    breakpoint: {
                      max: 1024,
                      min: 464
                    },
                    items: 1,
                    partialVisibilityGutter: 0
                  }
            },
            listOfImages: [],
        }
    }

    componentDidMount() {
        let listOfImages = this.importAll(require.context(
            './carouselImages', false, /\.(png|jpe?g|svg)$/));
        this.setState({listOfImages: listOfImages});
        console.log(listOfImages);
    }

    importAll(r) {
        return r.keys().map(r);
    }

    render() {
        return (
            <>
                <Row>
                    <div className="carousel" style={{width: '100%'}}>
                        <Carousel
                            responsive={this.state.responsive}
                            arrows
                            infinite
                            centerMode={false}
                            focusOnSelect={false}
                            containerClass="container-class-custom"
                        >
                            {this.state.listOfImages.map((item, index) => {
                                return (
                                    <img
                                        key={index}
                                        src={item.default}
                                        alt={"missing"}
                                        style={{width: '80%', height: '80%'}}
                                    />
                                )
                            })}

                        </Carousel>
                    </div>
                </Row>
            </>
        )
    }
}

export default ImageCarousel;