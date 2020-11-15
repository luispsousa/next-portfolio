import Layout from '../components/Layout';

const Error404 = ({ statusCode }) => (
  <Layout title='Error!!!'>
    {statusCode
      ? `Could not load your user data: Status Code ${statusCode}`
      : "Couldn't get that page, sorry!"}
  </Layout>
);

export default Error404;
