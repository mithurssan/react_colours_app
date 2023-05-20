import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/colours")
    }, [])
}

export default NotFound
