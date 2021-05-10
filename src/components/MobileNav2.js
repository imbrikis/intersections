import React from "react"
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"
import ArrowRight from "../../static/next.svg"
import ArrowLeft from "../../static/previous.svg"

function MobileNav2({
  artwork,
  artists,
  locations,
  themes,
  mediums,
  influences,
  generateDropdown,
}) {
  return (
    <div className="px-4 relative bg-gray-200">
      <CarouselProvider
        infinite={true}
        currentSlide={4}
        touchEnabled={true}
        visibleSlides={2}
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        totalSlides={6}
      >
        <Slider>
          <Slide index={0} className="text-center">
            {generateDropdown("artist", artists, "lightGreen")}
          </Slide>
          <Slide index={1}>
            {" "}
            {generateDropdown("artwork", artwork, "orange")}
          </Slide>
          <Slide index={2}>
            {generateDropdown("location", locations, "blue")}
          </Slide>
          <Slide index={3}>{generateDropdown("theme", themes, "pink")}</Slide>
          <Slide index={4}>
            {generateDropdown("influence", influences, "yellow")}
          </Slide>
          <Slide index={5}>
            {generateDropdown("medium", mediums, "lightBlue")}
          </Slide>
        </Slider>
        <ButtonBack className="absolute top-6 left-3">
          <img src={ArrowLeft} />
        </ButtonBack>
        <ButtonNext className="absolute top-6 right-3">
          <img src={ArrowRight} />
        </ButtonNext>
      </CarouselProvider>
    </div>
  )
}

export default MobileNav2
