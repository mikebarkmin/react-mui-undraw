
import React from 'react';
import { color } from '@storybook/addon-knobs';
import WinterActivities from '../src/WinterActivities';

export default {
  title: 'WinterActivities',
  component: WinterActivities,
};

export const Primary = () => <WinterActivities color="primary" />;
export const Secondary = () => <WinterActivities color="secondary" />;
export const Color = () => <WinterActivities color={color('color', '#00FF00')} />;
    