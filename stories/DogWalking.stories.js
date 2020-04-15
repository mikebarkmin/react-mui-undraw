
import React from 'react';
import { color } from '@storybook/addon-knobs';
import DogWalking from '../src/DogWalking';

export default {
  title: 'DogWalking',
  component: DogWalking,
};

export const Primary = () => <DogWalking color="primary" />;
export const Secondary = () => <DogWalking color="secondary" />;
export const Color = () => <DogWalking color={color('color', '#00FF00')} />;
    