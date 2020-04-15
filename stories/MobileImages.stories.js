
import React from 'react';
import { color } from '@storybook/addon-knobs';
import MobileImages from '../src/MobileImages';

export default {
  title: 'MobileImages',
  component: MobileImages,
};

export const Primary = () => <MobileImages color="primary" />;
export const Secondary = () => <MobileImages color="secondary" />;
export const Color = () => <MobileImages color={color('color', '#00FF00')} />;
    