interface Props {
  children: React.ReactNode
}

export default function BackOffice({
  children, // will be a page or nested layoutt
}: Props) {
  return (
    <section>
      <nav></nav>

      {children}

      <footer></footer>
    </section>
  )
}

