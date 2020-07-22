
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Pitching from '../src/Pitching';

export default {
  title: 'Pitching',
  component: Pitching,
};

export const Primary = () => <Pitching color="primary" />;
export const Secondary = () => <Pitching color="secondary" />;
export const Color = () => <Pitching color={color('color', '#00FF00')} />;
    