import React from "react";
import Product from "../../components/product/Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/kindle/journeys/YTFhNjA1Y2It/YTFhNjA1Y2It-OWZhN2QxYmUt-w3000._CB655779869_.jpg"
        alt="Amazon Alexa"
      />

      <div className="home_row">
        <Product
          id="98765"
          title="Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD) - Space Grey (November 2020)"
          price={1151.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71an9eiBxpL._AC_SL1500_.jpg"
        />

        <Product
          id="48375"
          title="SAMSUNG 55-Inch Class Crystal UHD TU-8000 Series - 4K UHD HDR Smart TV with Alexa Built-in (UN55TU8000FXZA, 2020 Model)"
          price={497.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71RiQZ0J2SL._AC_SL1000_.jpg"
        />
      </div>

      <div className="home_row">
        <Product
          id="345678"
          title="Logitech MX Master 3 – Advanced Wireless Mouse for Mac, 4000 DPI, Bluetooth, iPad Compatible  - Black"
          price={99.48}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/613a-3jtieL._AC_SL1500_.jpg"
        />
        <Product
          id="1232343"
          title="Sonos One (Gen 2) - The Powerful Smart Speaker with Alexa Built-In, Black"
          price={179.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71BCPUHy4fL._AC_SL1453_.jpg"
        />
        <Product
          id="1232343"
          title="Thrustmaster T300RS GT - Officially licensed Gran Turismo Racing Wheel - Compatible with PS4 and PC"
          price={341.67}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81bbP3pQ7qL._AC_SL1500_.jpg"
        />
      </div>

      <div className="home_row">
        <Product
          id="123234"
          title="Samsung LC49HG90DMUXEN 49-inch Curved Ultra Wide LED Monitor - 3840 x 1080, 144Hz, 1ms, Quantum Dot, Freesync, 2 x HDMI, Displayport, USB, Black"
          price={839.97}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71MlcO29QOL._AC_SL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
