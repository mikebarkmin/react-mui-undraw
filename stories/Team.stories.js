
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Team from '../src/Team';

export default {
  title: 'Team',
  component: Team,
};

export const Primary = () => <Team color="primary" />;
export const Secondary = () => <Team color="secondary" />;
export const Color = () => <Team color={color('color', '#00FF00')} />;
    