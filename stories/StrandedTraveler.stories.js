
import React from 'react';
import { color } from '@storybook/addon-knobs';
import StrandedTraveler from '../src/StrandedTraveler';

export default {
  title: 'StrandedTraveler',
  component: StrandedTraveler,
};

export const Primary = () => <StrandedTraveler color="primary" />;
export const Secondary = () => <StrandedTraveler color="secondary" />;
export const Color = () => <StrandedTraveler color={color('color', '#00FF00')} />;
    