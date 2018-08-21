import React, {Component} from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
const CardEg = (props) => [
  <Card>
    <Image src={props.image} />
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Card.Description>{props.faculty}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name= 'user'/>
        {props.desc} '' {props.name}
      </a>
    </Card.Content>
  </Card>
]
export default CardEg