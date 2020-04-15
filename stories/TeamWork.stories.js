
import React from 'react';
import { color } from '@storybook/addon-knobs';
import TeamWork from '../src/TeamWork';

export default {
  title: 'TeamWork',
  component: TeamWork,
};

export const Primary = () => <TeamWork color="primary" />;
export const Secondary = () => <TeamWork color="secondary" />;
export const Color = () => <TeamWork color={color('color', '#00FF00')} />;
    