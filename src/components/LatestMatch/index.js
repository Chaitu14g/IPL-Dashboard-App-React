import './index.css'

const LatestMatch = props => {
  const {updatedLatestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = updatedLatestMatchDetails
  return (
    <div className="latestMatchesContainerContainer">
      <div className="latestMatchesContainer">
        <div className="latestMatchesContainerFirst">
          <div className="latestMatchesContainerFirstSub">
            <p className="latestMatchesContainerFirstHeading">
              {competingTeam}
            </p>
            <p className="latestMatchesContainerFirstHeading latestMatchesContainerFirstHeadingDate">
              {date}
            </p>
            <p className="latestMatchesContainerFirstHeading latestMatchesContainerFirstHeadingVenue">
              {venue}
            </p>
            <p className="latestMatchesContainerFirstHeading latestMatchesContainerFirstHeadingVenue">
              {result}
            </p>
          </div>
          <img
            alt={`latest match ${competingTeam}`}
            src={competingTeamLogo}
            className="competingTeamLogoImage"
          />
        </div>
        <hr className="line" />
        <div className="latestMatchesContainerSecond">
          <p className="latestMatchesContainerSecondHeading">First Innings</p>
          <p className="latestMatchesContainerSecondHeading latestMatchesContainerSecondHeadingSub">
            {firstInnings}
          </p>
          <p className="latestMatchesContainerSecondHeading">Second Innings</p>
          <p className="latestMatchesContainerSecondHeading latestMatchesContainerSecondHeadingSub">
            {secondInnings}
          </p>
          <p className="latestMatchesContainerSecondHeading">
            Man of The Match
          </p>
          <p className="latestMatchesContainerSecondHeading latestMatchesContainerSecondHeadingSub">
            {manOfTheMatch}
          </p>
          <p className="latestMatchesContainerSecondHeading">Umpires</p>
          <p className="latestMatchesContainerSecondHeading latestMatchesContainerSecondHeadingSub">
            {umpires}
          </p>
        </div>
      </div>
      <div className="latestMatchesContainerL">
        <div className="latestMatchesContainerFirst">
          <p className="latestMatchesContainerFirstHeading">{competingTeam}</p>
          <p className="latestMatchesContainerFirstHeading latestMatchesContainerFirstHeadingDate">
            {date}
          </p>
          <p className="latestMatchesContainerFirstHeading latestMatchesContainerFirstHeadingVenue">
            {venue}
          </p>
          <p className="latestMatchesContainerFirstHeading latestMatchesContainerFirstHeadingVenue">
            {result}
          </p>
        </div>
        <div className="imageContainerL">
          <img
            alt={`latest match ${competingTeam}`}
            src={competingTeamLogo}
            className="competingTeamLogoImage"
          />
        </div>
        <div className="latestMatchesContainerSecond">
          <p className="latestMatchesContainerSecondHeading">First Innings</p>
          <p className="latestMatchesContainerSecondHeading latestMatchesContainerSecondHeadingSub">
            {firstInnings}
          </p>
          <p className="latestMatchesContainerSecondHeading">Second Innings</p>
          <p className="latestMatchesContainerSecondHeading latestMatchesContainerSecondHeadingSub">
            {secondInnings}
          </p>
          <p className="latestMatchesContainerSecondHeading">
            Man of The Match
          </p>
          <p className="latestMatchesContainerSecondHeading latestMatchesContainerSecondHeadingSub">
            {manOfTheMatch}
          </p>
          <p className="latestMatchesContainerSecondHeading">Umpires</p>
          <p className="latestMatchesContainerSecondHeading latestMatchesContainerSecondHeadingSub">
            {umpires}
          </p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
