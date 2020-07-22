
import React from 'react';
import { color } from '@storybook/addon-knobs';
import OutdoorParty from '../src/OutdoorParty';

export default {
  title: 'OutdoorParty',
  component: OutdoorParty,
};

export const Primary = () => <OutdoorParty color="primary" />;
export const Secondary = () => <OutdoorParty color="secondary" />;
export const Color = () => <OutdoorParty color={color('color', '#00FF00')} />;
    