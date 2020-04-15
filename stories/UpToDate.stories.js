
import React from 'react';
import { color } from '@storybook/addon-knobs';
import UpToDate from '../src/UpToDate';

export default {
  title: 'UpToDate',
  component: UpToDate,
};

export const Primary = () => <UpToDate color="primary" />;
export const Secondary = () => <UpToDate color="secondary" />;
export const Color = () => <UpToDate color={color('color', '#00FF00')} />;
    