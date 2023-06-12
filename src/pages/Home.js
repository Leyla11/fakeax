import { useEffect, useState } from 'react'
import Card from '../components/Card'
import axios from 'axios'

const Home = () => {
  const [comidas, setComidas] = useState([])
  const traerComidas = async() => {
    try {
        let response = await axios.get("https://api.escuelajs.co/api/v1/products")
        let data = response.data
        setComidas(data)
    } catch (error) {
        console.log(error)
    }
  }
  
  useEffect(() => {
    traerComidas()
  }, [])
  
    return (
    <div className='container'>
        {comidas.map(comida=>(
            <Card key={comida.title} comida={comida} />
        ))}
    </div>
  )
}

export default Home