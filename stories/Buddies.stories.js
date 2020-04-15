
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Buddies from '../src/Buddies';

export default {
  title: 'Buddies',
  component: Buddies,
};

export const Primary = () => <Buddies color="primary" />;
export const Secondary = () => <Buddies color="secondary" />;
export const Color = () => <Buddies color={color('color', '#00FF00')} />;
    