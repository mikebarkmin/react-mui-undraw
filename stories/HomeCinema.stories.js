
import React from 'react';
import { color } from '@storybook/addon-knobs';
import HomeCinema from '../src/HomeCinema';

export default {
  title: 'HomeCinema',
  component: HomeCinema,
};

export const Primary = () => <HomeCinema color="primary" />;
export const Secondary = () => <HomeCinema color="secondary" />;
export const Color = () => <HomeCinema color={color('color', '#00FF00')} />;
    