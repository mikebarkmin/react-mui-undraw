
import React from 'react';
import { color } from '@storybook/addon-knobs';
import TeamPage from '../src/TeamPage';

export default {
  title: 'TeamPage',
  component: TeamPage,
};

export const Primary = () => <TeamPage color="primary" />;
export const Secondary = () => <TeamPage color="secondary" />;
export const Color = () => <TeamPage color={color('color', '#00FF00')} />;
    