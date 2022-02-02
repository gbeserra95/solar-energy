import axios from 'axios'
import { toast } from 'react-toastify'

const instance = axios.create({
  baseURL: 'http://localhost:3333'
})

export const getData = url => {
  return instance.get(url).then(response => {
    return response.data
  })
}

export const setData = (url, data) => {
  return instance
    .post(url, data)
    .then(() => {
      toast.success('Unidade cadastrada com sucesso!')
    })
    .catch(() => {
      toast.error('Não foi possível cadastrar a unidade!')
    })
}

export const updateData = (url, data) => {
  return instance
    .put(url, data)
    .then(() => {
      toast.success('Unidade atualizada com sucesso!')
    })
    .catch(() => {
      toast.error('Não foi possível atualizar a unidade!')
    })
}

export const deleteData = url => {
  return instance
    .delete(url)
    .then(() => {
      toast.success('Unidade removida com sucesso!')
    })
    .catch(() => {
      toast.error('Não foi possível remover a unidade!')
    })
}
