
import React from 'react';
import { color } from '@storybook/addon-knobs';
import NightCalls from '../src/NightCalls';

export default {
  title: 'NightCalls',
  component: NightCalls,
};

export const Primary = () => <NightCalls color="primary" />;
export const Secondary = () => <NightCalls color="secondary" />;
export const Color = () => <NightCalls color={color('color', '#00FF00')} />;
    