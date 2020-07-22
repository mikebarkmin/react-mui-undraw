
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Switches from '../src/Switches';

export default {
  title: 'Switches',
  component: Switches,
};

export const Primary = () => <Switches color="primary" />;
export const Secondary = () => <Switches color="secondary" />;
export const Color = () => <Switches color={color('color', '#00FF00')} />;
    