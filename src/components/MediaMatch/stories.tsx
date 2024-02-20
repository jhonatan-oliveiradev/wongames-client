import { Meta, StoryObj } from '@storybook/react'
import MediaMatch from '.'

export default {
  title: 'MediaMatch',
  component: MediaMatch
} as Meta

export const Desktop: StoryObj = {
  args: {
    children: 'Only on Desktop',
    greaterThan: 'medium'
  }
}

export const Mobile: StoryObj = {
  args: {
    children: 'Only on Mobile',
    lessThan: 'medium'
  }
}

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
