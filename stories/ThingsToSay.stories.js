
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ThingsToSay from '../src/ThingsToSay';

export default {
  title: 'ThingsToSay',
  component: ThingsToSay,
};

export const Primary = () => <ThingsToSay color="primary" />;
export const Secondary = () => <ThingsToSay color="secondary" />;
export const Color = () => <ThingsToSay color={color('color', '#00FF00')} />;
    