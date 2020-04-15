
import React from 'react';
import { color } from '@storybook/addon-knobs';
import OnlineInformation from '../src/OnlineInformation';

export default {
  title: 'OnlineInformation',
  component: OnlineInformation,
};

export const Primary = () => <OnlineInformation color="primary" />;
export const Secondary = () => <OnlineInformation color="secondary" />;
export const Color = () => <OnlineInformation color={color('color', '#00FF00')} />;
    