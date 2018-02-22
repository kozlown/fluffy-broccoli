import React from 'react'

import './Dashboard.css'
import { Link } from 'react-router-dom'

class Dashboard extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      panel: 'lister'
    }
  }

  render () {
    const proposer = <div>
      Proposer
    </div>

    const lister = <div>
      Lister
    </div>

    return (
      <div className='Dashboard'>
        <div className='menu'>
          <button
            onClick={this.handleChangePanel.bind(this)('proposer')}
            className={`proposer ${this.state.panel === 'proposer' ? 'active' : ''}`}
          >Proposer un trajet</button>
          <button
            onClick={this.handleChangePanel.bind(this)('lister')}
            className={`lister ${this.state.panel === 'lister' ? 'active' : ''}`}>Lister les trajets</button>
        </div>
        {this.state.panel === 'proposer' ? proposer : lister}
        <Link to="/profile">
          <button className='Profile-button'>Profile</button>
        </Link>
      </div>
    )
  }

  handleChangePanel (panel) {
    return () => this.setState({
      panel
    })
  }
}

export default Dashboard