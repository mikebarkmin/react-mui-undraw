
import React from 'react';
import { color } from '@storybook/addon-knobs';
import DetailedExamination from '../src/DetailedExamination';

export default {
  title: 'DetailedExamination',
  component: DetailedExamination,
};

export const Primary = () => <DetailedExamination color="primary" />;
export const Secondary = () => <DetailedExamination color="secondary" />;
export const Color = () => <DetailedExamination color={color('color', '#00FF00')} />;
    