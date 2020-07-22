
import React from 'react';
import { color } from '@storybook/addon-knobs';
import BlackLivesMatter from '../src/BlackLivesMatter';

export default {
  title: 'BlackLivesMatter',
  component: BlackLivesMatter,
};

export const Primary = () => <BlackLivesMatter color="primary" />;
export const Secondary = () => <BlackLivesMatter color="secondary" />;
export const Color = () => <BlackLivesMatter color={color('color', '#00FF00')} />;
    