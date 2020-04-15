
import React from 'react';
import { color } from '@storybook/addon-knobs';
import NoData from '../src/NoData';

export default {
  title: 'NoData',
  component: NoData,
};

export const Primary = () => <NoData color="primary" />;
export const Secondary = () => <NoData color="secondary" />;
export const Color = () => <NoData color={color('color', '#00FF00')} />;
    