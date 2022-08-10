import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BasicTabs } from './Tabs';

export default {
  title: 'Tabs',
  component: BasicTabs,
} as ComponentMeta<typeof BasicTabs>;

const Template: ComponentStory<typeof BasicTabs> = (args: any) => (
  <BasicTabs {...args} />
);

const SampleTabs = [
  {
    label: 'Tab-1',
    component: <h1>Tab 1</h1>
  },
  {
    label: 'Tab-2',
    component: <h1>Tab 2</h1>
  },
  {
    label: 'Tab-2',
    component: <h1>Tab 3</h1>
  }
]

export const Default = Template.bind({});
Default.args = {
  tabs: SampleTabs,
};
