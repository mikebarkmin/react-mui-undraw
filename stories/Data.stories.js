
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Data from '../src/Data';

export default {
  title: 'Data',
  component: Data,
};

export const Primary = () => <Data color="primary" />;
export const Secondary = () => <Data color="secondary" />;
export const Color = () => <Data color={color('color', '#00FF00')} />;
    