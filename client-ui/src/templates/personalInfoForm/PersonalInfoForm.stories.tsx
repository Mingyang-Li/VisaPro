import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PersonalInfoForm } from './PersonalInfoForm';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'PersonalInfoForm',
  component: PersonalInfoForm,
} as ComponentMeta<typeof PersonalInfoForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PersonalInfoForm> = (args) => <PersonalInfoForm {...args} />;

export const Default = Template.bind({});
Default.args = {};
