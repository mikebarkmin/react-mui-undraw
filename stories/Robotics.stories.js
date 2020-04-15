
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Robotics from '../src/Robotics';

export default {
  title: 'Robotics',
  component: Robotics,
};

export const Primary = () => <Robotics color="primary" />;
export const Secondary = () => <Robotics color="secondary" />;
export const Color = () => <Robotics color={color('color', '#00FF00')} />;
    