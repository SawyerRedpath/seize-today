import axios from 'axios'

const baseUrl = 'http://localhost:3001/waters'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (water) => {
  const response = axios.post(baseUrl, water)
  return response.data
}

export default { getAll, createNew }
