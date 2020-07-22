
import React from 'react';
import { color } from '@storybook/addon-knobs';
import GoingOffline from '../src/GoingOffline';

export default {
  title: 'GoingOffline',
  component: GoingOffline,
};

export const Primary = () => <GoingOffline color="primary" />;
export const Secondary = () => <GoingOffline color="secondary" />;
export const Color = () => <GoingOffline color={color('color', '#00FF00')} />;
    