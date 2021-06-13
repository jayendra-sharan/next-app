import Head from 'next/head';

const Meta = ({
  title,
  keywords,
  description
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name={keywords} content={description}></meta>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'Jayendra Sharan | Next.js',
  keyowrds: 'Next.js, React, Learning',
  description: 'This is Next.JS 101 Website.'
}

export default Meta;
