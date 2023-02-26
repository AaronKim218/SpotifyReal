import {React, useState} from 'react'
import Card from 'react-bootstrap/Card';
import { Button, Container } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"

export default function Feed() {

  const [fireReaction, setFireReaction] = useState(0)
  const [trashReaction, setTrashReaction] = useState(0)

  return (
    <Card className="text-center">
      <Card.Img variant="top" src="Question_mark_(black).svg.png"/>
      <Card.Body>
        <Card.Title>Song Name</Card.Title>
        <Button variant="outline-dark" onClick={() => setFireReaction(fireReaction + 1)}>{fireReaction} 🔥</Button>
        <Button variant="outline-dark" onClick={() => setTrashReaction(trashReaction + 1)}>{trashReaction} 🗑️</Button>
      </Card.Body>
      <Card.Link href="#">User Spotify Page</Card.Link>
    </Card>
  );
}
