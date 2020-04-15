
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SelectingTeam from '../src/SelectingTeam';

export default {
  title: 'SelectingTeam',
  component: SelectingTeam,
};

export const Primary = () => <SelectingTeam color="primary" />;
export const Secondary = () => <SelectingTeam color="secondary" />;
export const Color = () => <SelectingTeam color={color('color', '#00FF00')} />;
    