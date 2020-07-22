
import React from 'react';
import { color } from '@storybook/addon-knobs';
import StarryWindow from '../src/StarryWindow';

export default {
  title: 'StarryWindow',
  component: StarryWindow,
};

export const Primary = () => <StarryWindow color="primary" />;
export const Secondary = () => <StarryWindow color="secondary" />;
export const Color = () => <StarryWindow color={color('color', '#00FF00')} />;
    