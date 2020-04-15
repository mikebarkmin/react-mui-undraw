
import React from 'react';
import { color } from '@storybook/addon-knobs';
import DataExtraction from '../src/DataExtraction';

export default {
  title: 'DataExtraction',
  component: DataExtraction,
};

export const Primary = () => <DataExtraction color="primary" />;
export const Secondary = () => <DataExtraction color="secondary" />;
export const Color = () => <DataExtraction color={color('color', '#00FF00')} />;
    