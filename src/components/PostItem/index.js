import Link from 'next/link'
const PostItem = ({ post }) => {
  return (
    <div>
      <Link href='/post/[id]' as={`/post/${post.id}`}>
        <a>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </a>
      </Link>
    </div>
  )
}

export default PostItem
