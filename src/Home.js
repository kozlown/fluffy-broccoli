import Map from './Map'
import React from 'react'
import { Link } from 'react-router-dom'

import './Home.css'

class Home extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      position: {
        coords: {
          latitude: 3,
          longitude: 53
        }
      }
    }
  }

  render () {
    return (<div className='Home'>
      <Map isMarkerShown coords={this.state.position.coords}/>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>)
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        position
      })
    })
  }
}

export default Home