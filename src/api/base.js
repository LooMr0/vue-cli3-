import axios from '.'

export const testStatus = ({ Id}) => {
  const data = {
    Id
  }
  return axios.request({
    url: '/v1/GraphicsProject/Detail',
    data,
    method: 'post'
  })
}
