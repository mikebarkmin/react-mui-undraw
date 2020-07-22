
import React from 'react';
import { color } from '@storybook/addon-knobs';
import InformationTab from '../src/InformationTab';

export default {
  title: 'InformationTab',
  component: InformationTab,
};

export const Primary = () => <InformationTab color="primary" />;
export const Secondary = () => <InformationTab color="secondary" />;
export const Color = () => <InformationTab color={color('color', '#00FF00')} />;
    