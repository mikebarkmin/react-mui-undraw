
import React from 'react';
import { color } from '@storybook/addon-knobs';
import FeelingOfJoy from '../src/FeelingOfJoy';

export default {
  title: 'FeelingOfJoy',
  component: FeelingOfJoy,
};

export const Primary = () => <FeelingOfJoy color="primary" />;
export const Secondary = () => <FeelingOfJoy color="secondary" />;
export const Color = () => <FeelingOfJoy color={color('color', '#00FF00')} />;
    