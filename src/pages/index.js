import React, { Component } from 'react'
import Chat from '../components/Chat'
import Game from '../components/Game'
import PlayerEntry from '../components/PlayerEntry'
import { Hero } from 'bloomer'
import db from '../firebase'
import './all.sass'

class IndexPage extends React.Component {
  constructor() {
    super()
    this.state = {
      game: {
        playerOne: {
          name: '',
          wins: 0,
          losses: 0,
          current: ''
        },
        playerTwo: {
          name: '',
          wins: 0,
          losses: 0,
          current: ''
        },
        input: '',
      },
      chat: [],
    }
  }
  render() {
    return (
      <div>
        <Hero isColor="light">
          <PlayerEntry
            playerOne={this.state.game.playerOne.name}
            playerTwo={this.state.game.playerTwo.name}
            input={this.state.game.input}
          />
          <Game
            game={this.state.game}
          />
        </Hero>
        <br />
        <Hero isColor="warning">
          <Chat
            display={this.state.game.playerTwo.name == '' ? false : true}
            chat={this.state.chat}
          />
        </Hero>
      </div>
    )
  }
}

export default IndexPage
