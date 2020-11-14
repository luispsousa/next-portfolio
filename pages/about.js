import Link from 'next/link';
import Layout from '../components/Layout';

const About = () => (
  <Layout title={'About'}>
    <p>A JavaScript programmer</p>
    <img src='/static/javascript-logo.png' alt='JavaScript' height='200px' />
  </Layout>
);

export default About;
