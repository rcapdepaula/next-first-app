import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: var(--max-width);
`
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: var(--dark-grey);
  color: var(--white);
  font-size: 1.2rem;
  font-weight: bold;
  a {
    color: var(--white);
    text-decoration: none;
    &:hover {
      color: var(--light-grey);
    }
  }
`
export const NavInner = styled.div`
  min-width: var(--max-width);
  margin: 0 auto;
`
