import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Card from './Card';
import { AnyNsRecord } from 'dns';

export default {
  title: 'Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args: any) => <Card {...args} />;

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
