import { expect } from 'chai'

import index from '../src/index.js'

describe('index', () => {
  it('returns value from field', () => {
    expect(index.field).to.equal('valuea')
  })
})
