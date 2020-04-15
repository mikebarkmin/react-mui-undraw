
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SwipeProfiles from '../src/SwipeProfiles';

export default {
  title: 'SwipeProfiles',
  component: SwipeProfiles,
};

export const Primary = () => <SwipeProfiles color="primary" />;
export const Secondary = () => <SwipeProfiles color="secondary" />;
export const Color = () => <SwipeProfiles color={color('color', '#00FF00')} />;
    