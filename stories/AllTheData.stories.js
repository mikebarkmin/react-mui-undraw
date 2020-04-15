
import React from 'react';
import { color } from '@storybook/addon-knobs';
import AllTheData from '../src/AllTheData';

export default {
  title: 'AllTheData',
  component: AllTheData,
};

export const Primary = () => <AllTheData color="primary" />;
export const Secondary = () => <AllTheData color="secondary" />;
export const Color = () => <AllTheData color={color('color', '#00FF00')} />;
    