
import React from 'react';
import { color } from '@storybook/addon-knobs';
import InstantInformation from '../src/InstantInformation';

export default {
  title: 'InstantInformation',
  component: InstantInformation,
};

export const Primary = () => <InstantInformation color="primary" />;
export const Secondary = () => <InstantInformation color="secondary" />;
export const Color = () => <InstantInformation color={color('color', '#00FF00')} />;
    