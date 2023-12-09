import { useState } from 'react'

import { createClient, cacheExchange, fetchExchange } from '@urql/core'
import { Provider } from 'urql';
import CardArray from './components/CardArray';
import Navbar from "./components/Navbar"
import Filter from './components/Filter';

const APIurl = "https://api.studio.thegraph.com/query/60876/testvideohandler/version/latest";

const client = createClient({ url: APIurl, exchanges: [cacheExchange, fetchExchange], })

function App() {
  const [data, setData] = useState([])

  return (
    <>
      <Provider value={client}>
        <Navbar />
        <div className='container my-5'>
          <h1 className='my-3'>Filter</h1>
          <Filter client={client} data={data} setData={setData} />
          <CardArray data={data} />
        </div>
      </Provider>
    </>
  )
}

export default App
