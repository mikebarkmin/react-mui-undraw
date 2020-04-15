
import React from 'react';
import { color } from '@storybook/addon-knobs';
import MobileBrowsers from '../src/MobileBrowsers';

export default {
  title: 'MobileBrowsers',
  component: MobileBrowsers,
};

export const Primary = () => <MobileBrowsers color="primary" />;
export const Secondary = () => <MobileBrowsers color="secondary" />;
export const Color = () => <MobileBrowsers color={color('color', '#00FF00')} />;
    