
import React from 'react';
import { color } from '@storybook/addon-knobs';
import AtWork from '../src/AtWork';

export default {
  title: 'AtWork',
  component: AtWork,
};

export const Primary = () => <AtWork color="primary" />;
export const Secondary = () => <AtWork color="secondary" />;
export const Color = () => <AtWork color={color('color', '#00FF00')} />;
    