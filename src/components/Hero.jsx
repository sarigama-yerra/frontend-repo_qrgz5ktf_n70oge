import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[520px] w-full">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/44zrIZf-iQZhbQNQ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80 pointer-events-none" />

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">Coins Guard</h1>
            <p className="mt-4 text-lg text-white/80">Professionelle Krypto-Recovery. Diskret, schnell, rechtskonform.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/anfrage" className="px-4 py-2 rounded-md bg-cyan-500 hover:bg-cyan-400 text-black font-semibold">Recovery anfragen</Link>
              <Link to="/services" className="px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 text-white">Leistungen</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
