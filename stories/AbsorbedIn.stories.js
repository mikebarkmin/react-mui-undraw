
import React from 'react';
import { color } from '@storybook/addon-knobs';
import AbsorbedIn from '../src/AbsorbedIn';

export default {
  title: 'AbsorbedIn',
  component: AbsorbedIn,
};

export const Primary = () => <AbsorbedIn color="primary" />;
export const Secondary = () => <AbsorbedIn color="secondary" />;
export const Color = () => <AbsorbedIn color={color('color', '#00FF00')} />;
    