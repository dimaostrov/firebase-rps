import React, { Component } from 'react'
import { Label, Field, Control, Input, Button } from 'bloomer'

class PlayerEntry extends React.Component {
  render() {
    return (
      <div>
        <Label isSize="small">Type Player Name</Label>
        <Field isGrouped>
          <Control>
            <Input type="text" placeholder="Player Name" />
          </Control>

          <Control>
            <Button isColor="primary">Start</Button>
          </Control>
        </Field>
      </div>
    )
  }
}

export default PlayerEntry
