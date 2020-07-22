
import React from 'react';
import { color } from '@storybook/addon-knobs';
import LocationReview from '../src/LocationReview';

export default {
  title: 'LocationReview',
  component: LocationReview,
};

export const Primary = () => <LocationReview color="primary" />;
export const Secondary = () => <LocationReview color="secondary" />;
export const Color = () => <LocationReview color={color('color', '#00FF00')} />;
    