
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Listening from '../src/Listening';

export default {
  title: 'Listening',
  component: Listening,
};

export const Primary = () => <Listening color="primary" />;
export const Secondary = () => <Listening color="secondary" />;
export const Color = () => <Listening color={color('color', '#00FF00')} />;
    