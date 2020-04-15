
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Town from '../src/Town';

export default {
  title: 'Town',
  component: Town,
};

export const Primary = () => <Town color="primary" />;
export const Secondary = () => <Town color="secondary" />;
export const Color = () => <Town color={color('color', '#00FF00')} />;
    