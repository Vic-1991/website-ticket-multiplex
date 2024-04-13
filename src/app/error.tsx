'use client'
// app/global-error.js
export default function GlobalError({ reset }: any) {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again1</button>
      </body>
    </html>
  )
}
