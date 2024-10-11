
import { useNavigate } from 'react-router-dom';
import {useEffect } from 'react'

const NotFound = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() =>{
            //Return to previus page
            navigate(-1)
    }, 1000)
}, [])
return (
    <>
    <h1>Not Found</h1>
        {/*
        //Direct navigation
        <Navigate to="/"/>
            {alert ("Page that you looked is not found")} */}


    </>
)
}


export default NotFound;