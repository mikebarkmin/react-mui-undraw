
import React from 'react';
import { color } from '@storybook/addon-knobs';
import TrackAndField from '../src/TrackAndField';

export default {
  title: 'TrackAndField',
  component: TrackAndField,
};

export const Primary = () => <TrackAndField color="primary" />;
export const Secondary = () => <TrackAndField color="secondary" />;
export const Color = () => <TrackAndField color={color('color', '#00FF00')} />;
    