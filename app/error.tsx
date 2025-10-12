'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl opacity-30">Qualcosa è andato storto</h2>
      <p>errore: {error.message}</p>
    </section>
  )
}
