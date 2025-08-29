import { describe, it, expect } from 'vitest'
import { sum } from '../../utils/sum'

describe('sum util (node env)', () => {
  it('adds two numbers', () => {
    expect(sum(2, 3)).toBe(5)
  })
})


