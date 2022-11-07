import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import GitHubCard from './components/GitHubCard';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function App() {
  const [gitHubName, setGitHubName] = useState('')
  const [gitHubUser, setGitHubUser] = useState('')
  const [gitHubURL, setGitHubURL] = useState('')
  const [gitHubBlog, setGitHubBlog] = useState('')
  const [gitHubImageURL, setGitHubImageURL] = useState('')

  useEffect(() => {
   fetch('https://api.github.com/users/DantheCodeRaider')
      .then(res => res.json())
      .then(data => {
        setGitHubName(data.name)
        setGitHubUser(data.login)
        setGitHubURL(data.html_url)
        setGitHubBlog(data.blog)
        setGitHubImageURL(data.avatar_url)
      })
  }, [])

  return (
    <div className="App">
      <div>
        <h1>Github Profile Info:</h1>
      </div>
      <Row>
        <Col style={{ display: 'flex', justifyContent: 'center' }}>
          <GitHubCard gitHubImageURL={gitHubImageURL} gitHubUser={gitHubUser} gitHubName={gitHubName} gitHubURL={gitHubURL} gitHubBlog={gitHubBlog}/>
        </Col>
      </Row>
    </div>
  );
}

export default App

//curl https://api.github.com/users/DantheCodeRaider
