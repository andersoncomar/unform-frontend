import React, { Component } from 'react';
import api from '../../services/api';

import {
  Container, TableContainer, ButtonEdit, ButtonRemove, ButtonCreate,
} from './styles';

export default class UserList extends Component {
  state = {
    users: [],
  };

  async componentDidMount() {
    const response = await api.get('/users');

    this.setState({ users: response.data });
  }

  async handleDestroy(id) {
    const { history } = this.props;
    await api.delete(`/users/${id}`);

    history.push('/users');
  }

  render() {
    const { users } = this.state;
    return (
      <Container>
        <ButtonCreate to="/users/create">Criar usuário</ButtonCreate>
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
                  <ButtonEdit to={`/users/edit/${user._id}`}>Editar</ButtonEdit>
                </td>
                <td>
                  <ButtonRemove type="button" onClick={() => this.handleDestroy(user._id)}>
                    Remover
                  </ButtonRemove>
                </td>
              </tr>
            ))}
          </tbody>
        </TableContainer>
      </Container>
    );
  }
}
