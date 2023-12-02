import { useContext } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context'

const Home = () => {
 
  const {dentists} = useContext(ContextGlobal)

  return (
    <>
      <h1>Inicio</h1>
      <div className='card-grid'>
        {dentists.length && dentists.map((dentist) => (
            <Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id} />
        ))}
      </div>
    </>
  )
}

export default Home