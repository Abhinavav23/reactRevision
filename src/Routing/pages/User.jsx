import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const User = () => {
    const {userId} = useParams();
    console.log("userParams", userId);

    useEffect(() => {
        console.log("user api call", userId);
    }, [])

  return (
    <div>User</div>
  )
}
