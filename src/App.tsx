import Logo from '@assets/icons/vite.svg'
import Image from '@assets/images/what.jpg'

function App() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-2">
      <Logo />
      <img src={Image} alt="" />
    </div>
  )
}

export default App
