import React from 'react'

const Footer = () => {
  return (
    <footer className="info">
	<p>Click to edit a todo</p>
	<p>Created by <a href="https://github.com/pathfinder3446">Arif Kılınç</a></p>
	<p>Part of <a href="https://github.com/pathfinder3446/redux_todo_app">Redux Todo APP</a></p>
</footer>
  )
}

export default React.memo(Footer);