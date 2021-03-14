import Axios from "axios";
import Head from "next/head";
import Item from "../../src/component/Item";
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react
import { useRouter } from "next/router";
const Post = ({ item, name }) => {
  const router = useRouter();
  if (router.isFallback) {
    return (
      <div style={{ padding: "100px 0" }}>
         <Segment>
            <Dimmer active>https://github.com/Semantic-Org/Semantic-UI-React/edit/master/docs/src/examples/elements/Loader/Types/LoaderExampleLoader.js?message=docs(LoaderExampleLoader):%20your%20description
              <Loader />
            </Dimmer>
            <Image src='/images/wireframe/short-paragraph.png' />
          </Segment>
      </div>
    );
  }
  return (
    <>
      {item && (
        <>
          <Head>
            <title>{item.name}</title>
            <meta name="description" content={item.description}></meta>
          </Head>
          {name} 환경 입니다.
          <Item item={item} />
        </>
      )}
    </>
  );
};

export default Post;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "740" } },
      { params: { id: "730" } },
      { params: { id: "729" } },
    ],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await Axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      item: data,
      name: process.env.name,
    },
  };
}
