
import React from 'react';
import { color } from '@storybook/addon-knobs';
import TeamSpirit from '../src/TeamSpirit';

export default {
  title: 'TeamSpirit',
  component: TeamSpirit,
};

export const Primary = () => <TeamSpirit color="primary" />;
export const Secondary = () => <TeamSpirit color="secondary" />;
export const Color = () => <TeamSpirit color={color('color', '#00FF00')} />;
    