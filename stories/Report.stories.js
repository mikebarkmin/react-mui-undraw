
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Report from '../src/Report';

export default {
  title: 'Report',
  component: Report,
};

export const Primary = () => <Report color="primary" />;
export const Secondary = () => <Report color="secondary" />;
export const Color = () => <Report color={color('color', '#00FF00')} />;
    