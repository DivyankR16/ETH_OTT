import { useState } from 'react'
import { createClient, cacheExchange, fetchExchange } from '@urql/core'
import { Provider } from 'urql';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

const APIurl = "https://api.studio.thegraph.com/query/60876/testgraph/version/latest";
const query = `
query {
  assigns(first: 5) {
    id
    to
    punkIndex
    blockNumber
  }
  transfers(first: 5) {
    id
    from
    to
    value
  }
}`

const client = createClient({ url: APIurl, exchanges: [cacheExchange, fetchExchange], })

function App() {
  const [count, setCount] = useState(0)

  async function fetchDATA() {
    console.log(1)
    const response = await client.query(query).toPromise();
    console.log(response.data)
  }
  fetchDATA()
  return (
    <Provider value={client}>
      <h1>Hi</h1>
    </Provider>
  )
}

export default App
