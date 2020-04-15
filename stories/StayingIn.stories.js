
import React from 'react';
import { color } from '@storybook/addon-knobs';
import StayingIn from '../src/StayingIn';

export default {
  title: 'StayingIn',
  component: StayingIn,
};

export const Primary = () => <StayingIn color="primary" />;
export const Secondary = () => <StayingIn color="secondary" />;
export const Color = () => <StayingIn color={color('color', '#00FF00')} />;
    