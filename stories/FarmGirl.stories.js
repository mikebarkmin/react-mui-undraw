
import React from 'react';
import { color } from '@storybook/addon-knobs';
import FarmGirl from '../src/FarmGirl';

export default {
  title: 'FarmGirl',
  component: FarmGirl,
};

export const Primary = () => <FarmGirl color="primary" />;
export const Secondary = () => <FarmGirl color="secondary" />;
export const Color = () => <FarmGirl color={color('color', '#00FF00')} />;
    