
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SmallTown from '../src/SmallTown';

export default {
  title: 'SmallTown',
  component: SmallTown,
};

export const Primary = () => <SmallTown color="primary" />;
export const Secondary = () => <SmallTown color="secondary" />;
export const Color = () => <SmallTown color={color('color', '#00FF00')} />;
    