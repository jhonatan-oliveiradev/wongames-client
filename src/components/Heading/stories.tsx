import { Meta, StoryObj } from '@storybook/react'
import Heading, { HeadingProps } from '.'
import { JSX } from 'react'

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: StoryObj<HeadingProps> = (
  args: JSX.IntrinsicAttributes & HeadingProps
) => <Heading {...args} />

Default.args = {
  children: 'Most Populars'
}
