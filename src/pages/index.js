import Head from 'next/head'
import Link from 'next/link'
import Posts from '../components/Posts'
// styles
import { Wrapper } from '../styles/index/index.styles'

const Index = ({ posts }) => {
  console.table(posts)
  return (
    <Wrapper>
      <Posts posts={posts} />
    </Wrapper>
  )
}

export default Index

// getstaticprops
export const getStaticProps = async () => {
  // get data from external API
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const posts = await res.json()

  // pass data to the page via props
  return {
    props: {
      posts,
    },
  }
}
