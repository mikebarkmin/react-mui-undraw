
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Calling from '../src/Calling';

export default {
  title: 'Calling',
  component: Calling,
};

export const Primary = () => <Calling color="primary" />;
export const Secondary = () => <Calling color="secondary" />;
export const Color = () => <Calling color={color('color', '#00FF00')} />;
    