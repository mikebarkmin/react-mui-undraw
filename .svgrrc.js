function template(
  { template },
  opts,
  { imports, componentName, props, jsx, exports }
) {
  return template.ast`
    ${imports}
    import PropTypes from 'prop-types';
    import { useTheme } from '@material-ui/core/styles';

    const ${componentName} = ({ color }) => {
      const theme = useTheme();

      if (color == "primary") {
        color = theme.palette.primary.main;
      } else if (color == "secondary") {
        color = theme.palette.secondary.main;
      }

      return ${jsx};
    }

    ${componentName}.propTypes = {
      color: PropTypes.string
    };

    ${componentName}.defaultProps = {
      color: "primary"
    };

    ${exports}
  `;
}

module.exports = {
  dimensions: false,
  memo: true,
  replaceAttrValues: {
    '#6c63ff': '{color}'
  },
  svgProps: {
    width: '100%',
    height: 'auto'
  },
  template: template
};
