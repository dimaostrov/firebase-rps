import React, { Component } from 'react'
import {
  Content,
  Box,
  Label,
  Control,
  Field,
  Input,
  Button,
  Message,
  MessageHeader,
  MessageBody,
} from 'bloomer'

function Chat(props) {
  const message = (
    <Message
      style={{
        float: 'right',
        maxWidth: '300px',
        display: 'block',
      }}
    >
      <MessageHeader>
        <p>Hello World</p>
      </MessageHeader>
      <MessageBody>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </MessageBody>
    </Message>
  )
  if (props.display == false) {
    return (
      <Box>
        <p>Chat will be available once the game starts</p>
      </Box>
    )
  } else {
    return (
    <Box>
      <h1>Chat</h1>

      <Label isSize="small">Send Message:</Label>
      <Field isGrouped>
        <Control>
          <Input type="text" placeholder="Your Message" />
        </Control>

        <Control>
          <Button isColor="primary">Submit</Button>
        </Control>
        <Control>
          <Button isLink>Erase</Button>
        </Control>
      </Field>
    </Box>
    )
  }
}

export default Chat
