
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Texting from '../src/Texting';

export default {
  title: 'Texting',
  component: Texting,
};

export const Primary = () => <Texting color="primary" />;
export const Secondary = () => <Texting color="secondary" />;
export const Color = () => <Texting color={color('color', '#00FF00')} />;
    