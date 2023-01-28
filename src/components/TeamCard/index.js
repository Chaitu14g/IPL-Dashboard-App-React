import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {eachItem} = props
  const {name, id, teamImageUrl} = eachItem
  return (
    <Link to={`/team-matches/${id}`} className="teamCardContainerSingle">
      <img
        alt={name}
        className="teamCardContainerSingleImage"
        src={teamImageUrl}
      />
      <h1 className="teamCardContainerSingleHeading">{name}</h1>
    </Link>
  )
}

export default TeamCard
