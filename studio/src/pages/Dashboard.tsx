import React from 'react'
import useProjects from '../hooks/useProjects'

export default function Dashboard() {
    const { projects } = useProjects();
    console.log(projects)
    return (
        <div>Dashboard</div>
    )
}