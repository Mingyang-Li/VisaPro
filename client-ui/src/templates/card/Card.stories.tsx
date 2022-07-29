import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Card from './Card';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Card',
  component: Card,
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'NCIYWRNC74349NC',
  updatedAt: new Date('2022-05-09').toLocaleDateString(),
  fullName: 'YOUR_FULL_NAME',
  email: 'YOUR_EMAIL@gmail.com',
  educationHistoriesCt: 3,
  employmentHistoriesCt: 6,
  travelHistoriesCt: 23,
  familyMembersCt: 6,
};

