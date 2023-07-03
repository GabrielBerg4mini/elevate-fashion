// eslint-disable-next-line no-unused-vars
import Header from '@/components/header'
import Propaganda from '@/components/propaganda'
export default function Home() {
  return (
    <main className="container min-h-screen w-full bg-backColor">
      {/* propaganda */}
      <Propaganda />
      {/* propaganda */}
      <header>
        <Header />
      </header>
    </main>
  )
}
