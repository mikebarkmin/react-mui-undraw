
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Messaging from '../src/Messaging';

export default {
  title: 'Messaging',
  component: Messaging,
};

export const Primary = () => <Messaging color="primary" />;
export const Secondary = () => <Messaging color="secondary" />;
export const Color = () => <Messaging color={color('color', '#00FF00')} />;
    