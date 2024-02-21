import { Meta, StoryObj } from '@storybook/react'
import Highlight, { HighlightProps } from '.'

import item from './mock'

export default {
  title: 'Highlight',
  component: Highlight,
  args: { ...item }
} as Meta

export const Default: StoryObj<HighlightProps> = {
  render: (args) => {
    return (
      <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
        <Highlight {...args} />
      </div>
    )
  }
}

export const WithFloatImage: StoryObj<HighlightProps> = {
  render: (args) => {
    return (
      <div style={{ maxWidth: '104rem' }}>
        <Highlight {...args} />
      </div>
    )
  }
}
