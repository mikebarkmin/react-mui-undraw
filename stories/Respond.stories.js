
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Respond from '../src/Respond';

export default {
  title: 'Respond',
  component: Respond,
};

export const Primary = () => <Respond color="primary" />;
export const Secondary = () => <Respond color="secondary" />;
export const Color = () => <Respond color={color('color', '#00FF00')} />;
    