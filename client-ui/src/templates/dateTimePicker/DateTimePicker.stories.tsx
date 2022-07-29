import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BasicDatePicker } from './DateTimePicker';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'DateTimePicker',
  component: BasicDatePicker,
} as ComponentMeta<typeof BasicDatePicker>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BasicDatePicker> = (args) => <BasicDatePicker {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Date',
  disabled: false,
  defaultValue: new Date(),
  updateParentDateValue: (d: Date) => console.log('date changed')
};

