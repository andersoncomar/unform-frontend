import React, { useState, useEffect } from 'react';
import { Form, Input } from 'unform';
import * as Yup from 'yup';

import api from '../../services/api';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório'),
  email: Yup.string()
    .email()
    .required('Email obrigatório'),
});

export default function UserForm({ history, match }) {
  const [data, setData] = useState({});

  async function handleSubmit(data) {
    await api.postOrPut('/users', match.params.id, data);

    history.push('/users');
  }

  useEffect(() => {
    async function loadData() {
      const { id } = match.params;
      const response = await api.get(`/users/${id}`);

      setData(response.data);
    }

    if (match.params.id) {
      loadData();
    }
  }, [match.params, match.params.id]);

  return (
    <Form schema={schema} initialData={data} onSubmit={handleSubmit}>
      <Input name="name" label="Nome" />
      <Input name="email" label="Email" />

      <button type="submit">Enviar</button>
    </Form>
  );
}
