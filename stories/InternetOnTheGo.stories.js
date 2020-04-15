
import React from 'react';
import { color } from '@storybook/addon-knobs';
import InternetOnTheGo from '../src/InternetOnTheGo';

export default {
  title: 'InternetOnTheGo',
  component: InternetOnTheGo,
};

export const Primary = () => <InternetOnTheGo color="primary" />;
export const Secondary = () => <InternetOnTheGo color="secondary" />;
export const Color = () => <InternetOnTheGo color={color('color', '#00FF00')} />;
    