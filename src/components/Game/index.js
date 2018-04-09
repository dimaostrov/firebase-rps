import React, { Component } from 'react'
import { Columns, Column, Button, Box } from 'bloomer'

class Game extends React.Component {
  render() {
    return (
      <div>
        <Columns>
          <Column>
            <Box>
              <p>Waiting for Player One</p>
            </Box>
          </Column>
          <Column>
            <Button isColor="warning" isLoading>
              isLoading={true}
            </Button>
          </Column>
          <Column>
            <Box>
              <p>Waiting for Player Two</p>
            </Box>
          </Column>
        </Columns>
      </div>
    )
  }
}

export default Game
