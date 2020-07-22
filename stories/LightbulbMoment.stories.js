
import React from 'react';
import { color } from '@storybook/addon-knobs';
import LightbulbMoment from '../src/LightbulbMoment';

export default {
  title: 'LightbulbMoment',
  component: LightbulbMoment,
};

export const Primary = () => <LightbulbMoment color="primary" />;
export const Secondary = () => <LightbulbMoment color="secondary" />;
export const Color = () => <LightbulbMoment color={color('color', '#00FF00')} />;
    