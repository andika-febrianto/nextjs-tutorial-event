import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AllEvents = ({data}) => {
  return <div className='events_page'>
      {data.map(ev=>(
        <Link key={ev.id} href={`/events/${ev.id}`} className='card'>
          <Image width={400} height={400} src={ev.image} alt={ev.title} /> 
          <h2>{ev.title}</h2>
        </Link>
      ))}
  </div>
}

export default AllEvents