
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Wedding from '../src/Wedding';

export default {
  title: 'Wedding',
  component: Wedding,
};

export const Primary = () => <Wedding color="primary" />;
export const Secondary = () => <Wedding color="secondary" />;
export const Color = () => <Wedding color={color('color', '#00FF00')} />;
    