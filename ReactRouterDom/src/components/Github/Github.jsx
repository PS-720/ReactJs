import React from 'react'
import { useEffect,useState } from 'react'

const Github = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://api.github.com/users/ps-720')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div className="text-xl font-semibold text-center py-4 text-white bg-gray-800">Github Followers: {data.followers}
    <img src={data.avatar_url} alt="Avatar" className="w-20 h-20 rounded-full mx-auto mt-4" />
    </div>
  )
}

export default Github