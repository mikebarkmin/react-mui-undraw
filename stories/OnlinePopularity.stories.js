
import React from 'react';
import { color } from '@storybook/addon-knobs';
import OnlinePopularity from '../src/OnlinePopularity';

export default {
  title: 'OnlinePopularity',
  component: OnlinePopularity,
};

export const Primary = () => <OnlinePopularity color="primary" />;
export const Secondary = () => <OnlinePopularity color="secondary" />;
export const Color = () => <OnlinePopularity color={color('color', '#00FF00')} />;
    