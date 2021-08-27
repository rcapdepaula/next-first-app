import { Wrapper, Nav, NavInner } from './Layout.styles'
import Link from 'next/link'
const Layout = ({ children }) => {
  return (
    <>
      <Nav>
        <NavInner>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </NavInner>
      </Nav>
      <Wrapper>{children}</Wrapper>
    </>
  )
}

export default Layout
