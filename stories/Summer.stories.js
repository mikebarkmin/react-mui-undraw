
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Summer from '../src/Summer';

export default {
  title: 'Summer',
  component: Summer,
};

export const Primary = () => <Summer color="primary" />;
export const Secondary = () => <Summer color="secondary" />;
export const Color = () => <Summer color={color('color', '#00FF00')} />;
    