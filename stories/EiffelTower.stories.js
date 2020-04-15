
import React from 'react';
import { color } from '@storybook/addon-knobs';
import EiffelTower from '../src/EiffelTower';

export default {
  title: 'EiffelTower',
  component: EiffelTower,
};

export const Primary = () => <EiffelTower color="primary" />;
export const Secondary = () => <EiffelTower color="secondary" />;
export const Color = () => <EiffelTower color={color('color', '#00FF00')} />;
    