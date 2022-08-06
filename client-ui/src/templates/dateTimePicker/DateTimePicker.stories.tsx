import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BasicDatePicker } from './DateTimePicker';

export default {
  title: 'DateTimePicker',
  component: BasicDatePicker,
} as ComponentMeta<typeof BasicDatePicker>;

const Template: ComponentStory<typeof BasicDatePicker> = (args: any) => (
  <BasicDatePicker {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Date',
  disabled: false,
  defaultValue: new Date(),
  updateParentDateValue: (d: Date) => console.log('date changed'),
};
