import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function GitHubCard(props) {

    return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.gitHubImageURL} alt='Github profile image' />
        <Card.Body>
          <Card.Title>{props.gitHubUser}</Card.Title>
          <Card.Text>
            Check out {props.gitHubName}'s GitHub below or his protfolio site at <a href={props.gitHubBlog}>{props.gitHubBlog}</a>
          </Card.Text>
          <a href={props.gitHubURL}><Button variant="primary">Link to GitHub profile</Button></a>
        </Card.Body>
      </Card>
    </div>
    );
}

export default GitHubCard