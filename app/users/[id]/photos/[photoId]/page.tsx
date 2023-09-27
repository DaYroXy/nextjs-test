import React from 'react'

interface Props {
    params: {
        id: String,
        photoId: String
    }
}

const PhotoPage = ({ params: {id, photoId} }: Props) => {
  return (
    <div>PhotoPage: {id} {photoId} </div>
  )
}

export default PhotoPage