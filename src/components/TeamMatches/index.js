import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    isLoading: true,
    bannerUrl: '',
    updatedLatestMatchDetails: '',
    updatedRecentMatches: '',
    id: '',
  }

  componentDidMount = () => {
    this.fetchTeamMatchDetails()
  }

  fetchTeamMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const bannerUrl = data.team_banner_url
    const latestMatchDetails = data.latest_match_details
    const recentMatches = data.recent_matches
    const updatedLatestMatchDetails = {
      umpires: latestMatchDetails.umpires,
      result: latestMatchDetails.result,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      id: latestMatchDetails.id,
      date: latestMatchDetails.date,
      venue: latestMatchDetails.venue,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      matchStatus: latestMatchDetails.match_status,
    }
    const updatedRecentMatches = recentMatches.map(eachItem => ({
      umpires: eachItem.umpires,
      result: eachItem.result,
      manOfTheMatch: eachItem.man_of_the_match,
      id: eachItem.id,
      date: eachItem.date,
      venue: eachItem.venue,
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      firstInnings: eachItem.first_innings,
      secondInnings: eachItem.second_innings,
      matchStatus: eachItem.match_status,
    }))
    this.setState({
      isLoading: false,
      bannerUrl,
      updatedLatestMatchDetails,
      updatedRecentMatches,
      id,
    })
  }

  render() {
    const {
      isLoading,
      bannerUrl,
      updatedLatestMatchDetails,
      updatedRecentMatches,
      id,
    } = this.state

    return (
      <div className={`teamMatchesContainer ${id}`}>
        {isLoading ? (
          <div id="loader">
            {' '}
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          <div className="teamMatchesContainerSub">
            <img className="bannerImage" alt="team banner" src={bannerUrl} />
            <h1 className="latestMatchesHeading">Latest Matches</h1>
            <LatestMatch
              updatedLatestMatchDetails={updatedLatestMatchDetails}
            />
            <div className="matchCardContainer">
              {updatedRecentMatches.map(eachItem => (
                <MatchCard key={eachItem.id} eachItem={eachItem} />
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
