
import React from 'react';
import { color } from '@storybook/addon-knobs';
import JobOffers from '../src/JobOffers';

export default {
  title: 'JobOffers',
  component: JobOffers,
};

export const Primary = () => <JobOffers color="primary" />;
export const Secondary = () => <JobOffers color="secondary" />;
export const Color = () => <JobOffers color={color('color', '#00FF00')} />;
    