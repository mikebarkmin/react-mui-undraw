
import React from 'react';
import { color } from '@storybook/addon-knobs';
import OnlineWorld from '../src/OnlineWorld';

export default {
  title: 'OnlineWorld',
  component: OnlineWorld,
};

export const Primary = () => <OnlineWorld color="primary" />;
export const Secondary = () => <OnlineWorld color="secondary" />;
export const Color = () => <OnlineWorld color={color('color', '#00FF00')} />;
    