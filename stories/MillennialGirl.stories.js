
import React from 'react';
import { color } from '@storybook/addon-knobs';
import MillennialGirl from '../src/MillennialGirl';

export default {
  title: 'MillennialGirl',
  component: MillennialGirl,
};

export const Primary = () => <MillennialGirl color="primary" />;
export const Secondary = () => <MillennialGirl color="secondary" />;
export const Color = () => <MillennialGirl color={color('color', '#00FF00')} />;
    