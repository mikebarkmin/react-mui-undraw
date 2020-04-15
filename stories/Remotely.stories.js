
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Remotely from '../src/Remotely';

export default {
  title: 'Remotely',
  component: Remotely,
};

export const Primary = () => <Remotely color="primary" />;
export const Secondary = () => <Remotely color="secondary" />;
export const Color = () => <Remotely color={color('color', '#00FF00')} />;
    