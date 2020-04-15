
import React from 'react';
import { color } from '@storybook/addon-knobs';
import MoreMusic from '../src/MoreMusic';

export default {
  title: 'MoreMusic',
  component: MoreMusic,
};

export const Primary = () => <MoreMusic color="primary" />;
export const Secondary = () => <MoreMusic color="secondary" />;
export const Color = () => <MoreMusic color={color('color', '#00FF00')} />;
    