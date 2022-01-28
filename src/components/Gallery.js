import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import "../components/gallery.css"
import Navigation from './Navigation'

export default function Gallery() {
    return (

        <div className='galleryContainer'>
         <Navigation/>
            <div className='title'>
                <h1>Picture Gallery</h1>
            </div>
            <div className='carouselContainer'>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./SCS.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./kitchendirty.jpeg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Before</h3>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./kitchencleanclose.jpeg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>After</h3>

                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block  w-100 "
                            src="./kitchenclean.jpeg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>After</h3>

                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
            </div>

            <div className='carouselContainer'>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./bathroomd1.jpeg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Before</h3>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./bathroomcleantub.jpeg"
                            alt="third"
                        />

                        <Carousel.Caption>
                            <h3>After</h3>B

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./bathroomd3.jpeg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Before</h3>

                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./bathroomcleantoilet.jpeg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>After</h3>
                        </Carousel.Caption>
                    </Carousel.Item>


                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./bathroomd2.jpeg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Before</h3>
                        </Carousel.Caption>
                    </Carousel.Item>


                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./bathroomcleanwide.jpeg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>After</h3>
                        </Carousel.Caption>
                    </Carousel.Item>



                </Carousel>
            </div>
        </div>
    )
}
