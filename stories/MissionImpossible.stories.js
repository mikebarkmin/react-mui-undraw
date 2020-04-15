
import React from 'react';
import { color } from '@storybook/addon-knobs';
import MissionImpossible from '../src/MissionImpossible';

export default {
  title: 'MissionImpossible',
  component: MissionImpossible,
};

export const Primary = () => <MissionImpossible color="primary" />;
export const Secondary = () => <MissionImpossible color="secondary" />;
export const Color = () => <MissionImpossible color={color('color', '#00FF00')} />;
    