import React from 'react'
import { Carousel, CarouselItem } from 'react-bootstrap'

import img1 from 'C:/Users/ashar/Desktop/STUDY/SEMESTER 4/FSE/Project/CMS/src/images/cr1.jpg'
import img2 from 'C:/Users/ashar/Desktop/STUDY/SEMESTER 4/FSE/Project/CMS/src/images/cr2.jpg'
import img3 from 'C:/Users/ashar/Desktop/STUDY/SEMESTER 4/FSE/Project/CMS/src/images/cr3.jpg'
import img4 from 'C:/Users/ashar/Desktop/STUDY/SEMESTER 4/FSE/Project/CMS/src/images/cr4.jpg'
const crousel = () => {
  return (
    <>
    <Carousel variant="dark">
      <CarouselItem   >
        <img style={{ maxWidth: "210vh", maxHeight: "200vh", minHeight: "2vh", minWidth: "5vh"}} src={img1} height="900px" width={2300} alt="First slide"></img>
      </CarouselItem>
      <CarouselItem>
        <img style={{ maxWidth: "210vh", maxHeight: "200vh", minHeight: "2vh", minWidth: "5vh"}} src={img2} height="900px" width={2300} alt="Second slide"></img>
      </CarouselItem>
      <CarouselItem>
        <img style={{ maxWidth: "210vh", maxHeight: "200vh", minHeight: "2vh", minWidth: "5vh"}} src={img3} height="900px" width={2300} alt="Third slide"></img>
      </CarouselItem>
      <CarouselItem>
        <img style={{ maxWidth: "210vh", maxHeight: "200vh", minHeight: "2vh", minWidth: "5vh"}} src={img4} height="900px" width={2300} alt="Fourth slide"></img>
      </CarouselItem>
    </Carousel>
  </>
  )
}

export default crousel