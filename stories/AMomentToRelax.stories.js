
import React from 'react';
import { color } from '@storybook/addon-knobs';
import AMomentToRelax from '../src/AMomentToRelax';

export default {
  title: 'AMomentToRelax',
  component: AMomentToRelax,
};

export const Primary = () => <AMomentToRelax color="primary" />;
export const Secondary = () => <AMomentToRelax color="secondary" />;
export const Color = () => <AMomentToRelax color={color('color', '#00FF00')} />;
    