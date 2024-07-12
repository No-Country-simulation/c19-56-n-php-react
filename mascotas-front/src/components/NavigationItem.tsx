import Link from "next/link"

interface Props {
  title: string
  isCollapsed: boolean
  children: React.ReactElement
  href: string
  classtyles: string
}

const NavigationItem = ({title, isCollapsed, children, href, classtyles}: Props)=>{
  console.log(children)
  return (
    <Link
            href={href}
            className={`${classtyles} ${
              isCollapsed ? "gap-0 px-6" : " items-center gap-3"
            }`}
            prefetch={false}
          >
            {children}
            <span
              className={`${
                isCollapsed
                  ? " opacity-0 whitespace-nowrap transition-opacity ease-in-out duration-500 w-[1rem] "
                  : " opacity-100 transition-opacity ease-in-out duration-500 "
              }`}
            >
              {title}
            </span>
          </Link>
  )
}

export default NavigationItem