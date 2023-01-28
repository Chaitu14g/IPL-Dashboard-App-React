import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {
    isLoading: true,
    teamCardList: [],
  }

  componentDidMount = () => {
    this.fetchTeamCardDetails()
  }

  fetchTeamCardDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    console.log(updatedData)
    this.setState({
      isLoading: false,
      teamCardList: updatedData,
    })
  }

  render() {
    const {isLoading, teamCardList} = this.state
    return (
      <div className="homeContainer homeLargeBackground">
        <div className="homeHeadingContainer">
          <img
            alt="ipl logo"
            className="homeLogo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
          />
          <h1 className="homeMainHeading">IPL Dashboard</h1>
        </div>
        <div>
          {isLoading ? (
            <div id="loader">
              {' '}
              <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
            </div>
          ) : (
            <ul className="teamCardContainer">
              {teamCardList.map(eachItem => (
                <TeamCard key={eachItem.id} eachItem={eachItem} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default Home
