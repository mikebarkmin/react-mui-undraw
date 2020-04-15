
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Witch from '../src/Witch';

export default {
  title: 'Witch',
  component: Witch,
};

export const Primary = () => <Witch color="primary" />;
export const Secondary = () => <Witch color="secondary" />;
export const Color = () => <Witch color={color('color', '#00FF00')} />;
    