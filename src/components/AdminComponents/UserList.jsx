import React, { useEffect, useState } from 'react'
import NavBar from '../landingComponents/NavBar'
import axios from 'axios'
import Swal from 'sweetalert2'
import { API } from '../../config';
const UserList = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetchData();

  }, [])
  const fetchData = async () => {
    const response = await axios.get(`${API}/api/admin-user-list`);
    if (response?.data?.code == 200) {
      setData(response?.data?.data)
    }
  }

  
  return (
    <>
      <NavBar></NavBar>
      <div className='row'>
        <div className='col-sm-1'></div>
        <div className='col-sm-10'>
          <h1 className='text-center text-danger'>AdminUserList</h1>
          <table className='table'>
            <thead className='table table-dark'>
              <tr>
                <th>Sr.No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Address</th>
                <th>Profile</th>
                
              </tr>
            </thead>
            <tbody>
              {
                data?.map((item, index) => {
                  console.log(item, "loop");

                  return (<>
                    <tr>
                      <td>{index + 1}</td>
                      <td>{item?.name} </td>
                      <td> {item?.email}  </td>
                      <td> {item?.contact}   </td>
                      <td>{item?.address}    </td>
                      
                      <td><img height="60" width="60" className='rounded-circle border border-dark' src={`${API}/img/${item?.profile}`} alt='' />    </td>
                     
                    </tr>
                  </>)
                })
              }

            </tbody>
          </table>
          {data?.length==0 && <p className='text-center'>No Record Found!</p>}
        </div>
        <div className='col-sm-1'></div>
      </div>
    </>

  )
}

export default UserList

