
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Snowman from '../src/Snowman';

export default {
  title: 'Snowman',
  component: Snowman,
};

export const Primary = () => <Snowman color="primary" />;
export const Secondary = () => <Snowman color="secondary" />;
export const Color = () => <Snowman color={color('color', '#00FF00')} />;
    