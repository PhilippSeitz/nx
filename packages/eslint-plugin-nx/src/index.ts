import typescript from './configs/typescript';
import javascript from './configs/javascript';
import reactTmp from './configs/react-tmp';
import reactBase from './configs/react-base';
import reactJsx from './configs/react-jsx';
import reactTypescript from './configs/react-typescript';

import enforceModuleBoundaries, {
  RULE_NAME as enforceModuleBoundariesRuleName,
} from './rules/enforce-module-boundaries';

module.exports = {
  configs: {
    typescript,
    javascript,
    react: reactTmp,
    'react-base': reactBase,
    'react-typescript': reactTypescript,
    'react-jsx': reactJsx,
  },
  rules: {
    [enforceModuleBoundariesRuleName]: enforceModuleBoundaries,
  },
};
