
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Upgrade from '../src/Upgrade';

export default {
  title: 'Upgrade',
  component: Upgrade,
};

export const Primary = () => <Upgrade color="primary" />;
export const Secondary = () => <Upgrade color="secondary" />;
export const Color = () => <Upgrade color={color('color', '#00FF00')} />;
    