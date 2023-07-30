import React, { Component } from 'react';
const styling = {
	backgroundColor : "#111111",
	minHeight: "100vh",
	color: "#6c8c86"
}

// might not need this !!!
const createdTasksStyle = {
	backgroundColor: "",
	color: "#7c9bb9"	
}
const completedTasksStyle = {
	backgroundColor: "",
	color: "#aa0011"
}
const Home = ()=>{

	return(<>
	<div style={styling} >

		<h3>ToDo List</h3>

		<div>
				<div className="input-group mb-4 w-50 mx-auto">
					<input type="text" className="form-control" placeholder="Create new Todo" aria-label="input for new todo" aria-describedby="basic-addon2"/>
					<span className="input-group-text" id="basic-addon2"><button  type="submit" className="btn btn-primary mb-1">Create</button></span>
				</div>
				<div className=" row g-3 mb-3 w-50 mx-auto">
					<div style={createdTasksStyle} className="col">Created Tasks</div>
					<div style={completedTasksStyle} className="col">Completed Tasks</div>
				</div>
		</div>

	</div>
	</>)
}	
export default Home