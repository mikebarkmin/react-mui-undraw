
import React from 'react';
import { color } from '@storybook/addon-knobs';
import LostOnline from '../src/LostOnline';

export default {
  title: 'LostOnline',
  component: LostOnline,
};

export const Primary = () => <LostOnline color="primary" />;
export const Secondary = () => <LostOnline color="secondary" />;
export const Color = () => <LostOnline color={color('color', '#00FF00')} />;
    