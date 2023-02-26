import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { Button } from 'react-bootstrap'

export function AddSongs() {
    return(
        <div class="container-fluid text-center">
      <div class="row">
        <div class="col">
          <Card style={{ width: '10rem' }}>
            <Card.Body>
              <Card.Title>Song Name: </Card.Title>
            </Card.Body>
          </Card>
          <Card style={{ width: '10rem' }}>
            <Card.Body>
              <Card.Title>Artist Name: </Card.Title>
            </Card.Body>
          </Card>
          <Card style={{ width: '10rem' }}>
            <Card.Body>
              <Card.Title>Album Name: </Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
    );
}
