import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { Container, TableContainer } from './styles';

export default class UserList extends Component {
  state = {
    users: [],
  };

  async componentDidMount() {
    const response = await api.get('/users');

    this.setState({ users: response.data });
  }

  async handleDestroy(id) {
    const response = await api.delete(`/users/${id}`);

    console.log(response);

    this.props.history.push('/users');
  }

  render() {
    const { users } = this.state;
    return (
      <Container>
        <Link to="/users/create">Criar usuário</Link>
        <TableContainer>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <Link to={`/users/edit/${user._id}`}>Editar</Link>
                </td>
                <td>
                  <button type="button" onClick={() => this.handleDestroy(user._id)}>
                    Remover
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </TableContainer>
      </Container>
    );
  }
}
