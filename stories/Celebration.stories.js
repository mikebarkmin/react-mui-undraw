
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Celebration from '../src/Celebration';

export default {
  title: 'Celebration',
  component: Celebration,
};

export const Primary = () => <Celebration color="primary" />;
export const Secondary = () => <Celebration color="secondary" />;
export const Color = () => <Celebration color={color('color', '#00FF00')} />;
    