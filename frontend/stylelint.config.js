module.exports = {
  extends: ['stylelint-config-recommended-scss', 'stylelint-config-rational-order'],
  rules: {
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
  },
};
