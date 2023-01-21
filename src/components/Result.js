import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../styles/Loading.css'
import style from '../styles/Result.module.css'

const Result = () => {

    const userSelection = window.location.pathname.split('/')[2] === 'searchByPincode' ? 'pincode' : 'postoffice';
    const pincode = window.location.pathname.split('/')[3]


    const [data, setData] = useState({})
    const [active, setActive] = useState()

    useEffect(() => {
        axios.get(`https://api.postalpincode.in/${userSelection}/${pincode}`)
            .then(res => {
                console.log(res.data[0])
                setData(res.data[0])

                data.Status === undefined ? setActive('content-wrapper') : setActive('hide-loading show-content')
            })
    }, [])


    return (
        <div>
            <div className='content-wrapper show-content'>
                <div className={style["result-wrapper"]}>
                    {
                        data.Status === undefined ? '' : (
                            data === undefined ? 'Undefined' : (
                                data.Status === '404' ? 'Not Found' : (
                                    data.Status === 'Error' ? 'Error' : (
                                        data.PostOffice.map((item) => (
                                            <div className={style["card-wrapper"]}>
                                                <p key={item.Block} >Block: {item.Block}</p>
                                                <p key={item.BranchType} >Branch Type: {item.BranchType}</p>
                                                <p key={item.Circle} >Circle: {item.Circle}</p>
                                                <p key={item.District} >District: {item.District}</p>
                                                <p key={item.Division} >Division: {item.Division}</p>
                                                <p key={item.Name} >Name: {item.Name}</p>
                                                <p key={item.Pincode} >Pincode: {item.Pincode}</p>
                                                <p key={item.State} >State: {item.State}</p>
                                            </div>
                                        ))
                                    )
                                )
                            )
                        )
                    }
                </div>
            </div>

            <div className={`loading-area-wrapper ${active}`}>
                <div className="spinner-box">
                    <div className="blue-orbit leo">
                    </div>

                    <div className="green-orbit leo">
                    </div>

                    <div className="red-orbit leo">
                    </div>

                    <div className="white-orbit w1 leo">
                    </div><div className="white-orbit w2 leo">
                    </div><div className="white-orbit w3 leo">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Result