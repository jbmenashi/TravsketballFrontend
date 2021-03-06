import React, {Component} from 'react'
var moment = require('moment')

class GameDetails extends Component {
  state = {
    title: "",
    date: moment(new Date()),
    homeTeam: "",
    awayTeam: "",
    stadium:""
  }

  componentDidMount() {
    fetch(`https://travsketball.herokuapp.com/api/v1/games/${this.props.gameId}`)
    .then(r => r.json())
    .then(data => {
      this.setState({
        title: data.game.title,
        date: data.game.date,
        homeTeam: data["home_team"],
        awayTeam: data["away_team"],
        stadium: data.stadium
      })

    })
  }

  render() {
    return (
      <div className="game-details col-12">
        <h2>{this.state.title}</h2>
        <img src={this.state.homeTeam.logo} alt={this.state.homeTeam.name}/>
        <img src={this.state.awayTeam.logo} alt={this.state.awayTeam.name}/>
        <h4>Date: {moment(this.state.date).format("l")}</h4>
        <h4>Time: {moment(this.state.date).format("LT")}</h4>
        <div className="stadium">
          <div className="info">
            <h4>{this.state.stadium.name}</h4>
            <h4>{this.state.stadium.location}</h4>
          </div>
          <img src={this.state.stadium.image} alt="{this.state.stadium.name}"/>
        </div>
      </div>
    )
  }
}

export default GameDetails
