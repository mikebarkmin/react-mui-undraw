
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SelectPlayer from '../src/SelectPlayer';

export default {
  title: 'SelectPlayer',
  component: SelectPlayer,
};

export const Primary = () => <SelectPlayer color="primary" />;
export const Secondary = () => <SelectPlayer color="secondary" />;
export const Color = () => <SelectPlayer color={color('color', '#00FF00')} />;
    