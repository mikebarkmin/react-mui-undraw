
import React from 'react';
import { color } from '@storybook/addon-knobs';
import IntenseFeeling from '../src/IntenseFeeling';

export default {
  title: 'IntenseFeeling',
  component: IntenseFeeling,
};

export const Primary = () => <IntenseFeeling color="primary" />;
export const Secondary = () => <IntenseFeeling color="secondary" />;
export const Color = () => <IntenseFeeling color={color('color', '#00FF00')} />;
    