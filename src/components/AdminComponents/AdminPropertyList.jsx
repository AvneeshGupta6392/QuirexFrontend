
import React, { useEffect, useState } from 'react'
import { FaTrash } from "react-icons/fa";

import { FaLocationDot } from "react-icons/fa6";
import { FaVectorSquare } from "react-icons/fa";
import { LuGitCompareArrows } from "react-icons/lu";
import { FaRupeeSign } from "react-icons/fa";
import NavBar from '../landingComponents/NavBar'
import axios from 'axios';
import Swal from 'sweetalert2';
import { API } from '../../config';
const AdminPropertyList = () => {
  const [listData, setListData] = useState([])
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const response = await axios.get(`${API}/api/property-list`);
    if (response?.data?.code == 200) {
      setListData(response?.data?.data)
    }

  }

  const handleDeleteproperty = async (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await axios.post(`${API}/api/delete-property`, { _id });
        if (response?.data?.code == 200) {
          Swal.fire({
            title: "Delete Property",
            text: response?.data?.message,
            icon: "success",
          });
          fetchData();

        }else{
          Swal.fire({
            title: "Delete Property",
            text: response?.data?.message,
            icon: "error",
          });

        }


      }
    });


  }

  return (
    <>
      <NavBar />
      <div className='row property py-5'>
        <div className="text-center ">
          <div className="tagline ">Properties </div>
          <h2 className="section-title">Featured Listings</h2>
        </div>
        <div className='col-sm-1'></div>
        <div className='col-sm-10'>
          <div className='row py-3 px-3 '>
            {listData?.map((item, index) => {
              return (<>
                <div className='col-sm-3  px-3 mb-4'>
                  <div className="card  mx-auto shadow-lg border border-0">
                     <div className="cardImgDiv">
                        <img
                          src={`${API}/img/${item?.pic}`}
                          className="card-img-top img-fluid featuredimg cardImgProperty"
                          alt="..."
                        />
                        <div className="image-icons">
                        </div>
                      </div>
                     
                    <div className="card-body">
                      <p className='mycolor1 my-1'><b><FaRupeeSign/>{item?.price}</b></p>
                      <h5 className="card-title my-1"><b className='mycolor2'>{item?.title}</b></h5>
                      <p className="card-text featuredp my-1">{item?.description}</p>
                      <p className="card-text featuredp my-2"><FaLocationDot/> {item?.location}</p>
                      <p className="card-text featuredp my-1"><LuGitCompareArrows /> {item?.area} Sq/ft</p>


                      <button onClick={() => handleDeleteproperty(item?._id)} className='btn buy mx-auto mt-3'>Delete</button>

                    </div>
                    
                  </div>
                </div>
              </>)
            })}
            {listData?.length == 0 && <h1 className='text-center'>No Record Found</h1>}
          </div>
        </div>
        <div className='col-sm-1'></div>
      </div>
    </>
  )
}

export default AdminPropertyList
