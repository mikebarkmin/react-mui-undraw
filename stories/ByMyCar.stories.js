
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ByMyCar from '../src/ByMyCar';

export default {
  title: 'ByMyCar',
  component: ByMyCar,
};

export const Primary = () => <ByMyCar color="primary" />;
export const Secondary = () => <ByMyCar color="secondary" />;
export const Color = () => <ByMyCar color={color('color', '#00FF00')} />;
    