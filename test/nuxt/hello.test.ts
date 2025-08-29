import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { HelloTest } from '#components'

describe('HelloTest component (Nuxt runtime)', () => {
  it('renders hello text', async () => {
    const wrapper = await mountSuspended(HelloTest)
    expect(wrapper.get('[data-testid="hello"]').text()).toContain('Hello from Nuxt Test')
  })
})


