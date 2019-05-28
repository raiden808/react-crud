import React, { Component } from 'react'
import Table from './table'

class App extends Component {
  render() {

  	const characters = [
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
  			job: 'Aspiring actress',
  		},
  		{
  			name: 'Dennis',
  			job: 'Bartender',
  		},
  	]

    return (
      <div className="container">
        <Table characterData={characterData} />
      </div>
    )
  }
}

export default App