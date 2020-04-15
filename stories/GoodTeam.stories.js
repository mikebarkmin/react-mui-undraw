
import React from 'react';
import { color } from '@storybook/addon-knobs';
import GoodTeam from '../src/GoodTeam';

export default {
  title: 'GoodTeam',
  component: GoodTeam,
};

export const Primary = () => <GoodTeam color="primary" />;
export const Secondary = () => <GoodTeam color="secondary" />;
export const Color = () => <GoodTeam color={color('color', '#00FF00')} />;
    