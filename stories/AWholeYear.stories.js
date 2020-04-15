
import React from 'react';
import { color } from '@storybook/addon-knobs';
import AWholeYear from '../src/AWholeYear';

export default {
  title: 'AWholeYear',
  component: AWholeYear,
};

export const Primary = () => <AWholeYear color="primary" />;
export const Secondary = () => <AWholeYear color="secondary" />;
export const Color = () => <AWholeYear color={color('color', '#00FF00')} />;
    