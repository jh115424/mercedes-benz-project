// import { useState } from 'react'
import react from 'react';
import { useState } from 'react';





export const AutoHome = () => {

   const [cars, setCars] = useState([
        {
            id: 1,
            name: "Mercedes-Benz",
            image: "https://www.mercedes-benz.com/en/mercedes-benz-logo.html",
            description: "Mercedes-Benz is a German luxury automotive brand known for its high-quality vehicles and innovative technology.",
            price: 50000,
            year: 2022,
            mileage: 10000,
            color: "Black",
            engine: "V6",
            transmission: "Automatic",
            fuel: "Gasoline",
            drivetrain: "Front-wheel drive",
            seats: 5,
            doors: 4,
            airbags: 6,
            abs: true,
            traction_control: true,
            stability_control: true,
            bluetooth: true,
            navigation: true,
            sunroof: true,
            heated_seats: true,
            leather_seats: true,
            power_steering: true,
            power_windows: true,





},


    ]); // Close the useState array

    return (
        <div>
            {/* Your component JSX goes here */}
            <h1>Mercedes-Benz</h1>
        </div>
    )
}

export default AutoHome