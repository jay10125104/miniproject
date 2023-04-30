import React, { useEffect, useState } from 'react'
import ReactStars from "react-stars";
import { useParams } from 'react-router-dom';
import { db } from '../firebase/firebase';
import { getDoc, doc } from 'firebase/firestore';
import { Bars } from 'react-loader-spinner';
import ProgressBar from "@ramonak/react-progress-bar";
import { Button } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import blue from '@mui/material/colors/blue';
import purple from '@mui/material/colors/purple';
// import { Item } from './yourItem';
const theme = createTheme({
  palette: {
    primary: purple,
  },
});
const Details = () => {
  const [data, setData] = useState({
    Title: "",
    Year: "",
    description: "",
    image: "",
  });
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    async function getData() {
      setLoading(true);
      console.log(id)
      const _doc = doc(db, "movies", id);
      const _data = await getDoc(_doc);
      console.log(_data.data());
      setData(_data.data());
      console.log(data.image);
      console.log(data.Title)
      setLoading(false);
    }
    getData();
  }, [])
  // window.alert(id);
  return (
    <>
      <div className='p-4 flex flex-col md:flex-row items-center md:items-start w-full justify-center'>
        {loading ? <div><Bars height={25} color='white' className="h-96 w-full justify-center items-center" /></div> :
          <>
            <img className='h-96 sticky top-24' src={data.image} alt="" />
            <div className='ml-4 w-1/2'>
              <h1 className='text-2xl font-bold text-gray-400'>{data.Title} <span className='text-x1'>({data.Year})</span></h1>
              <ReactStars
                size={20}
                half={true}
                value={4.5}
                edit={false}
              />
              <h1 className='mt-2'>
                {data.description}
              </h1>
              <h1 className='mt-3 mb-3'>
                <ProgressBar completed={40} />
              </h1>
              <ThemeProvider theme={theme}>
                <Button className='mt-3' variant="contained" color='primary'>Donate </Button>
              </ThemeProvider>
            </div>
          </>
        }
      </div>
      <div className='flex flex-wrap justify-between px-16 mt-2'>
        <div class="card">
          <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg" alt="Organization Logo"></img>
          <div class="card-body">
            <h5 class="card-title">Organization Name</h5>
            <p class="card-text">Mission Statement</p>
            <a href="#" class="btn btn-primary">Donate Now</a>
          </div>
        </div>
        <div class="card">
          <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg" alt="Organization Logo"></img>
          <div class="card-body">
            <h5 class="card-title">Organization Name</h5>
            <p class="card-text">Mission Statement</p>
            <a href="#" class="btn btn-primary">Donate Now</a>
          </div>
        </div>
        <div class="card">
          <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg" alt="Organization Logo"></img>
          <div class="card-body">
            <h5 class="card-title">Organization Name</h5>
            <p class="card-text">Mission Statement</p>
            <a href="#" class="btn btn-primary">Donate Now</a>
          </div>
        </div>
        <div class="card">
          <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg" alt="Organization Logo"></img>
          <div class="card-body">
            <h5 class="card-title">Organization Name</h5>
            <p class="card-text">Mission Statement</p>
            <a href="#" class="btn btn-primary">Donate Now</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Details
