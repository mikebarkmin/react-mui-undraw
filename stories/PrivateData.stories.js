
import React from 'react';
import { color } from '@storybook/addon-knobs';
import PrivateData from '../src/PrivateData';

export default {
  title: 'PrivateData',
  component: PrivateData,
};

export const Primary = () => <PrivateData color="primary" />;
export const Secondary = () => <PrivateData color="secondary" />;
export const Color = () => <PrivateData color={color('color', '#00FF00')} />;
    