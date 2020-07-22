
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Nature from '../src/Nature';

export default {
  title: 'Nature',
  component: Nature,
};

export const Primary = () => <Nature color="primary" />;
export const Secondary = () => <Nature color="secondary" />;
export const Color = () => <Nature color={color('color', '#00FF00')} />;
    