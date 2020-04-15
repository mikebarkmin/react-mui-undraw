
import React from 'react';
import { color } from '@storybook/addon-knobs';
import RunningWild from '../src/RunningWild';

export default {
  title: 'RunningWild',
  component: RunningWild,
};

export const Primary = () => <RunningWild color="primary" />;
export const Secondary = () => <RunningWild color="secondary" />;
export const Color = () => <RunningWild color={color('color', '#00FF00')} />;
    