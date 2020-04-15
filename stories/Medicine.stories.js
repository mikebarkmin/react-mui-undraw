
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Medicine from '../src/Medicine';

export default {
  title: 'Medicine',
  component: Medicine,
};

export const Primary = () => <Medicine color="primary" />;
export const Secondary = () => <Medicine color="secondary" />;
export const Color = () => <Medicine color={color('color', '#00FF00')} />;
    