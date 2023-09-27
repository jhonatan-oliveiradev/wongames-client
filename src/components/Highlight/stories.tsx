import { Meta, StoryObj } from '@storybook/react'
import Highlight, { HighlightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Red Dead is back!',
    subtitle: 'Come and discover the new adventures of John Marston',
    buttonLabel: 'Buy now',
    buttonLink: '/games/rdr2',
    backgroundImage: '/img/red-dead-img.jpg',
    floatImage: '/img/red-dead-float.png'
  }
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
