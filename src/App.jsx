import React from "react"
import Testimonial from "./Layouts/Testimonial";
import testimonialData from "./testimonialData";
import './Assets/Styles/AppStyles/App.css'

function App() {
  return (
    <div className="App">
      {
        testimonialData.map(data => {
          return(
            <Testimonial
              key={data.key}
              id={data.key}
              img={data.img}
              name={data.name}
              highlight={data.highlight}
              quote={data.quote}
            />
          )
        })

      }

    </div>
  );
}

export default App;
