
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Love from '../src/Love';

export default {
  title: 'Love',
  component: Love,
};

export const Primary = () => <Love color="primary" />;
export const Secondary = () => <Love color="secondary" />;
export const Color = () => <Love color={color('color', '#00FF00')} />;
    