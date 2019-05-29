import React, { Component } from 'react'
import Table from './table'

class App extends Component {
   	render() {
	    
	    state = {
	    	characters:[
				{
	    			name: 'Charlie',
		        	job: 'Janitor',
		      	},
		      	{
		        	name: 'Mac',
		       		job: 'Bouncer',
		      	},
		      	{
		        	name: 'Dee',
		        	job: 'Aspring actress',
		      	},
		      	{
		        	name: 'Dennis',
		        	job: 'Bartender',
		      },

	    	],
	    }

	    return (
	      <div className="container">
	         <Table characterData={characters} />
	      </div>
	    )
  }
}

export default App