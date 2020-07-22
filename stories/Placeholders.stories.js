
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Placeholders from '../src/Placeholders';

export default {
  title: 'Placeholders',
  component: Placeholders,
};

export const Primary = () => <Placeholders color="primary" />;
export const Secondary = () => <Placeholders color="secondary" />;
export const Color = () => <Placeholders color={color('color', '#00FF00')} />;
    