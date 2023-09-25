import React from 'react'
import "./Home.css";
import pic from './images/home.png'
import Product from './Product'
import book from './images/book.png'
import stand from './images/stand.png'
import led from './images/led.png'
import alexa from './images/alexa.png'
import ipad from './images/ipad.png'
import monitor from './images/monitor.png'
function Home() {
  return (
    <div className='home'>
        <div className="home_container">
        <img className="home_image" src={pic} alt="img"/>
        <div className="home_row">
          <Product title='Train To Pakistan (PB) Paperback – Notebook, 2 February 2016
by Singh Khushwant (Author, Contributor)' id='12321341' price='252' image={book} rating={5} />
          <Product title= 'STRIFF Adjustable Laptop Tabletop Stand Patented Riser Ventilated Portable Foldable Compatible with MacBook Notebook Tablet Tray Desk Table Book with Free Phone Stand (Black)' id='49538094' price='323' image={stand} rating='5'/>
        </div>
        <div className="home_row">
          <Product title='Samsung 80 cm (32 Inches) Wondertainment Series HD Ready LED Smart TV UA32T4340BKXXL (Glossy Black)' id='23445930' price='14990' image={led} rating={3} />
          <Product title='Echo Dot (4th Gen, 2020 release)| Smart speaker with Alexa (Blue)' id='3254354345' price='3799' image={alexa} rating={4} />
          <Product title='Apple 2022 10.9-inch iPad (Wi-Fi, 256GB) - Blue (10th Generation)' price='57990' image={ipad} rating={5}/>
        </div>
        <div className="home_row">
        <Product title='Samsung 34-inches 86.42cm LED Odyssey G5 Ultra WQHD, 165 Hz, 1ms, 1000R Curved Gaming Monitor, HDR10, AMD FreeSync Premium -LC34G55TWWWXXL, Black, 3440 X 1440 (WQHD) Pixels' id='90829332' price='39099' image={monitor} rating={4.3} />
        </div>
        </div>
    </div>
  )
}

export default Home
