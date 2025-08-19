import React from 'react'
import BookingForm from '../BookingForm/BookingForm'
import CarListing from '../CarListing/CarListing'

export default function OurCar() {
  return (
    <>
    <div className="relative z-50">
      <BookingForm  />
      </div>
     <div className="relative lg:z-50">
  <CarListing />
</div>

    </>
  )
}
