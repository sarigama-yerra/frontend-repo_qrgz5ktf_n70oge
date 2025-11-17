import Hero from './Hero'
import { ServicesSection, AboutSection, ContactSection } from './Sections'

export function HomePage() {
  return (
    <main>
      <Hero />
      <ServicesSection />
      <CTA />
    </main>
  )
}

export function ServicesPage() {
  return (
    <main className="pt-16">
      <ServicesSection />
      <CTA subtle />
    </main>
  )
}

export function AboutPage() {
  return (
    <main className="pt-16">
      <AboutSection />
      <CTA subtle />
    </main>
  )
}

export function ContactPage() {
  return (
    <main className="pt-16">
      <ContactSection />
    </main>
  )
}

export function RequestPage() {
  return (
    <main className="pt-16">
      <RequestForm />
    </main>
  )
}

function CTA({ subtle }) {
  return (
    <section className={"py-14 " + (subtle ? 'bg-gray-50' : 'bg-black') }>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={"rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 " + (subtle ? 'bg-white border' : 'bg-gradient-to-br from-cyan-500 to-purple-500') }>
          <div>
            <h3 className={"text-xl font-semibold " + (subtle ? '' : 'text-black')}>Schnelle Ersteinschätzung</h3>
            <p className={"mt-1 text-sm " + (subtle ? 'text-gray-600' : 'text-black/80')}>Kostenlos und unverbindlich. Wir sagen klar, was möglich ist – und was nicht.</p>
          </div>
          <a href="/anfrage" className={"px-4 py-2 rounded-md font-semibold " + (subtle ? 'bg-black text-white hover:bg-gray-800' : 'bg-black/80 text-white hover:bg-black')}>Recovery anfragen</a>
        </div>
      </div>
    </section>
  )
}

function RequestForm() {
  const submit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
    const res = await fetch(`${base}/api/recovery`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    if (res.ok) {
      alert('Anfrage erhalten. Wir melden uns.')
      e.currentTarget.reset()
    } else {
      alert('Senden fehlgeschlagen. Bitte später erneut versuchen.')
    }
  }

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">Recovery-Anfrage</h1>
        <p className="mt-2 text-gray-600">Bitte nur Fakten. Je präziser, desto schneller können wir helfen.</p>

        <form onSubmit={submit} className="mt-6 grid gap-4 max-w-2xl">
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="name" required placeholder="Name" className="border rounded-md px-3 py-2" />
            <input name="email" type="email" required placeholder="E-Mail" className="border rounded-md px-3 py-2" />
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <input name="wallet_type" required placeholder="Wallet/Exchange/Chain" className="border rounded-md px-3 py-2" />
            <input name="asset" required placeholder="Asset (z. B. BTC, ETH)" className="border rounded-md px-3 py-2" />
            <input name="amount" placeholder="Menge (optional)" className="border rounded-md px-3 py-2" />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <select name="incident_type" required className="border rounded-md px-3 py-2">
              <option value="">Vorfallstyp wählen</option>
              <option>Phishing</option>
              <option>Seed verloren</option>
              <option>Betrug</option>
              <option>Technischer Fehler</option>
              <option>Sonstiges</option>
            </select>
            <input name="contact_preference" placeholder="Bevorzugter Kontakt (Telefon, E-Mail, etc.)" className="border rounded-md px-3 py-2" />
          </div>

          <textarea name="details" required placeholder="Kurzbeschreibung des Vorfalls" rows={5} className="border rounded-md px-3 py-2" />

          <button className="justify-self-start px-4 py-2 rounded-md bg-cyan-600 text-white hover:bg-cyan-500">Absenden</button>
        </form>
      </div>
    </section>
  )
}
