import Image from 'next/image'
import Main from './components/main'
import Shop from './components/shop'
import About from './components/about'

export default function Home() {
  return (
    <main>
      <Main />
      <Shop />
      <About />
    </main>
  )
}
