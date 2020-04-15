
import React from 'react';
import { color } from '@storybook/addon-knobs';
import WorkTogether from '../src/WorkTogether';

export default {
  title: 'WorkTogether',
  component: WorkTogether,
};

export const Primary = () => <WorkTogether color="primary" />;
export const Secondary = () => <WorkTogether color="secondary" />;
export const Color = () => <WorkTogether color={color('color', '#00FF00')} />;
    