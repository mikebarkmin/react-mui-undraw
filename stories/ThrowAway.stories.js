
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ThrowAway from '../src/ThrowAway';

export default {
  title: 'ThrowAway',
  component: ThrowAway,
};

export const Primary = () => <ThrowAway color="primary" />;
export const Secondary = () => <ThrowAway color="secondary" />;
export const Color = () => <ThrowAway color={color('color', '#00FF00')} />;
    