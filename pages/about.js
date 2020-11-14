import fetch from 'isomorphic-unfetch';
import { Component } from 'react';
import Layout from '../components/Layout';

class About extends Component {
  state = {
    user: null,
  };

  static async getInitialProps() {
    const res = await fetch('https://api.github.com/users/luispsousa');
    const data = await res.json();

    return { user: data };
  }

  /* componentDidMount() {
    fetch('https://api.github.com/users/reedbarger')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          user: data,
        });
      });
  } */

  render() {
    const { user } = this.props;
    return (
      <Layout title='About'>
        <p>{user.name}</p>
        <img src={user.avatar_url} alt='Luís Sousa' height='200px' />
      </Layout>
    );
  }
}

export default About;
