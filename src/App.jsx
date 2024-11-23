import './App.css'
import Button from './components/Button'

function App () {
  return (
    <>
      <Button 
        label='click me'
        callback={() => console.log('click!')} 
      />

      <img src="" alt="" />
    </>
  )
}

export default App
