import React from 'react'

const Dashboard = () => {
    const handleLogout = () => {
        navigate("/login");
  return (
    <div>
    <h2>Welcome to the Dashboard</h2>
    <button onClick={handleLogout}>Logout</button>
  </div>
  )
}
}
export default Dashboard;