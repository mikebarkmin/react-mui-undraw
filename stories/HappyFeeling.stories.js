
import React from 'react';
import { color } from '@storybook/addon-knobs';
import HappyFeeling from '../src/HappyFeeling';

export default {
  title: 'HappyFeeling',
  component: HappyFeeling,
};

export const Primary = () => <HappyFeeling color="primary" />;
export const Secondary = () => <HappyFeeling color="secondary" />;
export const Color = () => <HappyFeeling color={color('color', '#00FF00')} />;
    