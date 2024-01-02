// GeneralButton.stories.js

import React from 'react';
import CustomButton from './generalButton';

export default {
  title: 'Example/CustomButton',
  component: CustomButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color' },
    text: { control: 'text' },  // Add this line for text control
  },
};

const redirectToNetflix = () => {
  window.location.href = 'https://www.netflix.com/browse';
};

export const Default = (args) => (
  <CustomButton
    {...args}
    onClick={redirectToNetflix}
  />
);

Default.args = {
  text: "Click me",  // Default text
  color: "blue",     // Default color
};

export const GreenButton = (args) => (
  <CustomButton
    {...args}
    onClick={redirectToNetflix}
  />
);

GreenButton.args = {
  text: "Press here",
  color: "green",
};

export const RedButton = (args) => (
  <CustomButton
    {...args}
    onClick={redirectToNetflix}
  />
);

RedButton.args = {
  text: "Tap this",
  color: "red",
};
