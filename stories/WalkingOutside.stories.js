
import React from 'react';
import { color } from '@storybook/addon-knobs';
import WalkingOutside from '../src/WalkingOutside';

export default {
  title: 'WalkingOutside',
  component: WalkingOutside,
};

export const Primary = () => <WalkingOutside color="primary" />;
export const Secondary = () => <WalkingOutside color="secondary" />;
export const Color = () => <WalkingOutside color={color('color', '#00FF00')} />;
    