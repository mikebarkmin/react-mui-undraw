
import React from 'react';
import { color } from '@storybook/addon-knobs';
import WalkInTheCity from '../src/WalkInTheCity';

export default {
  title: 'WalkInTheCity',
  component: WalkInTheCity,
};

export const Primary = () => <WalkInTheCity color="primary" />;
export const Secondary = () => <WalkInTheCity color="secondary" />;
export const Color = () => <WalkInTheCity color={color('color', '#00FF00')} />;
    