
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Chilling from '../src/Chilling';

export default {
  title: 'Chilling',
  component: Chilling,
};

export const Primary = () => <Chilling color="primary" />;
export const Secondary = () => <Chilling color="secondary" />;
export const Color = () => <Chilling color={color('color', '#00FF00')} />;
    