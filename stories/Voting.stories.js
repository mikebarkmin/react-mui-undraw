
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Voting from '../src/Voting';

export default {
  title: 'Voting',
  component: Voting,
};

export const Primary = () => <Voting color="primary" />;
export const Secondary = () => <Voting color="secondary" />;
export const Color = () => <Voting color={color('color', '#00FF00')} />;
    