import React from "react"

const Header = (props) => {
  return (
    <header className="task-header">
      <div className="header-content">
        <h1>{props.title}</h1>
        <span className="date-display">{new Date().toLocaleDateString()}</span>
      </div>
    </header>
  )
}

export default Header
