import { expect } from 'chai'
import superagent from 'superagent'
import superagentMock from 'superagent-mock'

import index from '../src/index.js'

describe('superagent call', () => {
  let xhrMock
  const requests = []

  const xhrRequestsLogger = log => requests.push(log)
  const mockWithConfig = data => {
    const config = [{
      fixtures: () => data,
      callback: () => { return { body: data } }
    }]
    xhrMock = superagentMock(superagent, config, xhrRequestsLogger)
  }

  beforeEach(() => { xhrMock = undefined; requests.length = 0 })
  afterEach(() => { if (xhrMock && xhrMock.unset) xhrMock.unset() })

  it('adds the querystring to the url', () => {
    mockWithConfig()
    index()
    console.warn(requests[0])
    expect(requests[0].url).to.equal('/somewhere?field1=value1')
  })
})
