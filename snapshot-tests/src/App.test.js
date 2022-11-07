import { render, screen, waitFor } from '@testing-library/react'
import renderer from 'react-test-renderer'
import App from './App'

const testData = [{
  "login": "DantheCodeRaider",
  "id": 103788290,
  "node_id": "U_kgDOBi-vAg",
  "avatar_url": "https://avatars.githubusercontent.com/u/103788290?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/DantheCodeRaider",
  "html_url": "https://github.com/DantheCodeRaider",
  "followers_url": "https://api.github.com/users/DantheCodeRaider/followers",
  "following_url": "https://api.github.com/users/DantheCodeRaider/following{/other_user}",
  "gists_url": "https://api.github.com/users/DantheCodeRaider/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/DantheCodeRaider/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/DantheCodeRaider/subscriptions",
  "organizations_url": "https://api.github.com/users/DantheCodeRaider/orgs",
  "repos_url": "https://api.github.com/users/DantheCodeRaider/repos",
  "events_url": "https://api.github.com/users/DantheCodeRaider/events{/privacy}",
  "received_events_url": "https://api.github.com/users/DantheCodeRaider/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Dan",
  "company": null,
  "blog": "Https://coderaider.tech/",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 67,
  "public_gists": 0,
  "followers": 0,
  "following": 3,
  "created_at": "2022-04-15T22:12:02Z",
  "updated_at": "2022-08-19T00:42:29Z"
}]

    test('renders a snapshot', () => {
      const tree = renderer.create(<App />).toJSON()
      expect(tree).toMatchSnapshot()
    })

     test('renders text DantheCodeRaider', () => {
      // Given
      const updateScreen = jest.fn()
      render(<App updateScreen={updateScreen} />)
      // When
      const nameElement = screen.getAllByRole('link')
      userEvent.type(nameElement) 
      userEvent.onload()
      // Then
      expect(nameElement).toBeInTheDocument('DantheCodeRaider')
    })


