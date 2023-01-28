import './index.css'

const MatchCard = props => {
  const {eachItem} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = eachItem
  let answer
  if (matchStatus === 'Won') {
    answer = 'matchCardContainerSubWin'
  } else {
    answer = 'matchCardContainerSubLoss'
  }

  return (
    <div className="matchCardContainerSub">
      <img
        alt={`competing team ${competingTeam}`}
        className="matchCardContainerSubImage"
        src={competingTeamLogo}
      />
      <p className="matchCardContainerSubHeading">{competingTeam}</p>
      <p className="matchCardContainerSubPara">{result}</p>
      <p className={answer}>{matchStatus}</p>
    </div>
  )
}

export default MatchCard
