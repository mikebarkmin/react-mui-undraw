
import React from 'react';
import { color } from '@storybook/addon-knobs';
import WashHands from '../src/WashHands';

export default {
  title: 'WashHands',
  component: WashHands,
};

export const Primary = () => <WashHands color="primary" />;
export const Secondary = () => <WashHands color="secondary" />;
export const Color = () => <WashHands color={color('color', '#00FF00')} />;
    