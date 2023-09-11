import React, { useEffect } from 'react'
import useProjects from '../hooks/useProjects'
import useURLHandler from '../hooks/useURLHandler';
import Axios from "axios";
export default function Dashboard() {
    const { projects } = useProjects();
    console.log(projects)
    useEffect(() => {
        Axios.get("http://localhost:3000").then(res => {
            console.log(res.data)
        }).catch(err=>{
            console.log(err)
        })
    }, [])
    return (
        <div>Dashboard</div>
    )
}