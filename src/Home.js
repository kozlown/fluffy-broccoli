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
          latitude: 43.74374,
          longitude: 1.38675
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