import React from 'react'
import useProjects from '../hooks/useProjects'
import useURLHandler from '../hooks/useURLHandler';

export default function Dashboard() {
    const { projects } = useProjects();
    const url = useURLHandler("/dashboard");
    console.log(url)
    console.log(projects)
    return (
        <div>Dashboard</div>
    )
}