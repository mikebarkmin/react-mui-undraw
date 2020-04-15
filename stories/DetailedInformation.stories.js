
import React from 'react';
import { color } from '@storybook/addon-knobs';
import DetailedInformation from '../src/DetailedInformation';

export default {
  title: 'DetailedInformation',
  component: DetailedInformation,
};

export const Primary = () => <DetailedInformation color="primary" />;
export const Secondary = () => <DetailedInformation color="secondary" />;
export const Color = () => <DetailedInformation color={color('color', '#00FF00')} />;
    