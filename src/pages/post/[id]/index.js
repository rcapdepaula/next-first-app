import { useRouter } from 'next/router'
const Post = ({ post }) => {
  //   const router = useRouter()
  //   const { id } = router.query
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}

export default Post

// getStaticProps
export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  )
  const post = await res.json()
  return {
    props: {
      post,
    },
  }
}

// getStaticPaths
export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

  const paths = posts.map((post) => ({
    params: {
      id: post.id.toString(),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}
