import React, { useEffect, useState } from 'react'
import { TailSpin,ThreeDots } from 'react-loader-spinner';
import ReactStars from "react-stars";
import {getDocs} from 'firebase/firestore'
import {moviesRef} from '../firebase/firebase'
import { Link } from 'react-router-dom';
const Cards = () => {
  const [data, SetData] = useState([]);
  const [loading,setLoading]=useState(false);
  useEffect(()=>{
    async function getData(){
      setLoading(true);
      const _data = await getDocs(moviesRef);
      _data.forEach((doc)=>{
        SetData((prv)=>[...prv,{...(doc.data()),id:doc.id}])
      })
      setLoading(false);
    }
    getData()
  },[])
  return (
    <div className="flex flex-wrap justify-between px-3 mt-2">
      {loading?<div className='w-full flex justify-center items-center h-96'><ThreeDots height={40} color="white" /></div>:
        data.map((e, i) => {
          return(
          <Link to={`/detail/${e.id}`}><div key={i} className='card text-lg shadow-lg p-2 hover:translate-y-4 cursor-pointer mt-6 transition-all duration-500'>
            <img className='h-72 w-60' src={e.image} />
            <h1><span className='text-gray-500'>Name:</span> {e.Title}</h1>
            <h1 className='flex item-center'><span className='text-gray-500 mr-2'>Rating:</span>
            <ReactStars
            size={20}
            half={true}
            value={5}
            edit={false}
            />
            </h1>
            <h1><span className='text-gray-500'>Year:</span> {e.Year}</h1>
          </div>
          </Link>
          );
        })
      }
    </div>

  )
}

export default Cards
