
import React from 'react';
import { color } from '@storybook/addon-knobs';
import HomeRun from '../src/HomeRun';

export default {
  title: 'HomeRun',
  component: HomeRun,
};

export const Primary = () => <HomeRun color="primary" />;
export const Secondary = () => <HomeRun color="secondary" />;
export const Color = () => <HomeRun color={color('color', '#00FF00')} />;
    