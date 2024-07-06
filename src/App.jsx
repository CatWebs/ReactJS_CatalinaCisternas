import Navbar from './componets/Navbar/Navbar'
import ItemListContainer from './componets/ItemListContainer/ItemListContainer'
import "./main-styles.css"

function App() {

  return (
    <>
     <Navbar />
     <ItemListContainer greeting="Bienvenido a Arañitas Tejedoras" />
    </>
  )
}

export default App
