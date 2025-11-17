export function ServicesSection() {
  const items = [
    { title: 'Wallet-Wiederherstellung', desc: 'Zugriff verloren? Wir helfen bei Seed, Passphrase und 2FA-Problemen.' },
    { title: 'Betrugsfälle & Scams', desc: 'Analyse, Dokumentation und Unterstützung bei der Rückverfolgung.' },
    { title: 'Transaktionsanalyse', desc: 'On-Chain-Forensik mit professionellen Tools und Reports.' },
    { title: 'Exchange-Support', desc: 'Koordination mit Börsen und Dienstleistern – compliant und schnell.' },
  ]
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Leistungen</h2>
        <p className="mt-2 text-gray-600">Klarer Prozess. Nachweisbare Schritte. Realistische Erwartungen.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-xl border border-gray-200 p-5 hover:shadow-md transition">
              <h3 className="font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function AboutSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Über uns</h2>
        <div className="mt-4 max-w-3xl text-gray-700 space-y-4">
          <p>Coins Guard ist ein spezialisiertes Team aus Krypto-Forensikern, Sicherheitsingenieuren und Legal-Partnern.</p>
          <p>Wir arbeiten weltweit, diskret und mit klaren Prozessen. Keine leeren Versprechen – nur Fakten und saubere Arbeit.</p>
        </div>
      </div>
    </section>
  )
}

export function ContactSection() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Kontakt</h2>
        <p className="mt-2 text-gray-600">Kurz schreiben – wir melden uns werktags in wenigen Stunden.</p>
        <ContactForm />
      </div>
    </section>
  )
}

function ContactForm() {
  const submit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
    const res = await fetch(`${base}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    if (res.ok) {
      alert('Danke! Wir melden uns zeitnah.')
      e.currentTarget.reset()
    } else {
      alert('Senden fehlgeschlagen. Bitte später erneut versuchen.')
    }
  }
  return (
    <form onSubmit={submit} className="mt-6 grid gap-4 max-w-xl">
      <input name="name" required placeholder="Name" className="border rounded-md px-3 py-2" />
      <input name="email" type="email" required placeholder="E-Mail" className="border rounded-md px-3 py-2" />
      <textarea name="message" required placeholder="Nachricht" rows={4} className="border rounded-md px-3 py-2" />
      <button className="justify-self-start px-4 py-2 rounded-md bg-black text-white hover:bg-gray-800">Senden</button>
    </form>
  )
}
