import superagent from 'superagent'

export default () => {
  superagent
    .get('/somewhere')
    .query({ field1: 'value1' })
    .end(() => {})
}
