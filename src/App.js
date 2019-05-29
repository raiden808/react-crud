import React, { Component } from 'react'
import Table from './table'

class App extends Component {

	state = {
		characters:[
			{
                'name': 'Charlie',
                'job': 'Janitor'
            },
            {
                'name': 'Mac',
                'job': 'Bouncer'
            },
		]
	};

   	render() {
	    
	    const { characters } = this.state;

	    return (
	      <div className="container">
	         <Table characterData={characters} />
	      </div>
	    )
  }
}

export default App