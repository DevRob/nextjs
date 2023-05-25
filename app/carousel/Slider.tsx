import { useState } from "react"
import { items } from "../../public/cms/CarouselData.json"
import Carousel from 'react-bootstrap/Carousel'
import "bootstrap/dist/css/bootstrap.min.css"

export default function Slider() {
  const { bootstrap } = items
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex: any, e: any) => {
    setIndex(selectedIndex)
  }
  return (
    <Carousel variant="dark" activeIndex={index} onSelect={handleSelect}>
      {bootstrap.map((item: any) => (
          <Carousel.Item key={item.id} className="" interval={600000}>
            <a className="carousel-link" href={item.url} target="_blank" aria-label={item.title}>
              <img src={item.imageUrl} alt="slides" />
              <Carousel.Caption className="">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </Carousel.Caption>
            </a>
          </Carousel.Item>
      ))}
    </Carousel>
  )
}