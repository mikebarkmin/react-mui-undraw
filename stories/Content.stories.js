
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Content from '../src/Content';

export default {
  title: 'Content',
  component: Content,
};

export const Primary = () => <Content color="primary" />;
export const Secondary = () => <Content color="secondary" />;
export const Color = () => <Content color={color('color', '#00FF00')} />;
    