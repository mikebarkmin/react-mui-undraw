
import React from 'react';
import { color } from '@storybook/addon-knobs';
import AtHome from '../src/AtHome';

export default {
  title: 'AtHome',
  component: AtHome,
};

export const Primary = () => <AtHome color="primary" />;
export const Secondary = () => <AtHome color="secondary" />;
export const Color = () => <AtHome color={color('color', '#00FF00')} />;
    