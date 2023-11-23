import React from 'react'

function CardS3({title,paragraph}) {
  return (
    <div className='S3card-container'>
        <h1>{title}</h1>
        <p>{paragraph}</p>
    </div>
  )
}

export default CardS3