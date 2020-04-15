
import React from 'react';
import { color } from '@storybook/addon-knobs';
import HappyNews from '../src/HappyNews';

export default {
  title: 'HappyNews',
  component: HappyNews,
};

export const Primary = () => <HappyNews color="primary" />;
export const Secondary = () => <HappyNews color="secondary" />;
export const Color = () => <HappyNews color={color('color', '#00FF00')} />;
    