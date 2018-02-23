import React from 'react'
import Map from './Map'

import './Dashboard.css'
import { Link } from 'react-router-dom'

class Dashboard extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      panel: 'lister',
      position: {
        coords: {
          latitude: 43.74374,
          longitude: 1.38675
        }
      }
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        position
      })
    })
  }

  render () {
    const trajets = [
      {
        depart: {
          lat: 43.643757699999995,
          lng: 1.3866828999999998,
          nom: '186 route de Grenade, Blagnac, Toulouse, France',
        },
        arrivee: {
          lat: 48.856614,
          lng: 2.3522219,
          nom: 'Paris centre'
        },
        driver: 'Jean michel',
        listePassagers: [
          'Pierre'
        ],
        departDate: new Date(),
        arriveeDate: new Date('06/03/2018')
      },
      {
        depart: {
          lat: 48.856614,
          lng: 2.3522219,
          nom: 'Paris centre'
        },
        arrivee: {
          lat: 43.643757699999995,
          lng: 1.3866828999999998,
          nom: '186 route de Grenade, Blagnac, Toulouse, France',
        },
        driver: 'Jean michel',
        listePassagers: [
          'Pierre'
        ],
        departDate: new Date('06/03/2018'),
        arriveeDate: new Date('07/03/2018')
      }
    ]



    const proposer = <div className='proposer'>
      <Map isMarkerShown coords={this.state.position.coords}/>
    </div>

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    const lister = trajets.map(trajet => <div className='trajet'>
      <div>Départ: De {trajet.depart.nom} le {trajet.departDate.toLocaleDateString('fr-FR', options)}</div>
      <div>Arrivée: De {trajet.arrivee.nom} le {trajet.arriveeDate.toLocaleDateString('fr-FR', options)}</div>
      <div>Conducteur: {trajet.driver}</div>
      <div>Passagers: {trajet.listePassagers.map(passager => <div>{passager}</div>)}</div>
      <button>Voyager !</button>
    </div>)

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