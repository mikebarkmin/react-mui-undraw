
import React from 'react';
import { color } from '@storybook/addon-knobs';
import FeaturesOverview from '../src/FeaturesOverview';

export default {
  title: 'FeaturesOverview',
  component: FeaturesOverview,
};

export const Primary = () => <FeaturesOverview color="primary" />;
export const Secondary = () => <FeaturesOverview color="secondary" />;
export const Color = () => <FeaturesOverview color={color('color', '#00FF00')} />;
    