import React, { Component } from 'react';
const styling = {
	backgroundColor : "#111111",
	minHeight: "100vh",
	color: "#6c8c86"
}

// might not need this !!!
const formStyle = {
	width: "50%",
	
	
}
const Home = ()=>{

	return(<>
	<div style={styling} >

		<h3>ToDo List</h3>

		<div>
				<div className="input-group mb-3 w-50 mx-auto">
					<input type="text" className="form-control" placeholder="Create new Todo" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
					<span className="input-group-text" id="basic-addon2">@example.com</span>
				</div>
		</div>

	</div>
	</>)
}	
export default Home