
import React from 'react';
import { color } from '@storybook/addon-knobs';
import TeamGoals from '../src/TeamGoals';

export default {
  title: 'TeamGoals',
  component: TeamGoals,
};

export const Primary = () => <TeamGoals color="primary" />;
export const Secondary = () => <TeamGoals color="secondary" />;
export const Color = () => <TeamGoals color={color('color', '#00FF00')} />;
    