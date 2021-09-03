import React, {useEffect} from 'react'
import CharacterList from '../components/CharacterList'
import SearchForm from '../components/SearchForm'

const Home = () => {

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <main>
      <CharacterList />
    </main>
  )
}

export default Home
