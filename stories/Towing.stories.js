
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Towing from '../src/Towing';

export default {
  title: 'Towing',
  component: Towing,
};

export const Primary = () => <Towing color="primary" />;
export const Secondary = () => <Towing color="secondary" />;
export const Color = () => <Towing color={color('color', '#00FF00')} />;
    