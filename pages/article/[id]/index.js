import Meta from '../../../components/Meta';
import Link from 'next/Link';
import { useRouter } from 'next/router';
import { server } from '../../../config';

const article = ({ article }) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Meta title={article.title} />
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href='/'>Go Back</Link>
    </>
  )
  return <div>this is an article</div>
}
export const getServerSideProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`);
  const article = await res.json();

  return {
    props: { article }
  }
}

export default article;
