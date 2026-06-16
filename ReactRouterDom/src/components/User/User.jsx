import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
  const { userid } = useParams();

  return (
    <div className="text-xl font-semibold text-center py-4 text-white bg-gray-800">User: {userid}</div>
  );
}

export default User