import factory from './factory'

const configurations = [
  ...factory('slate'),
  ...factory('slate-base64-serializer'),
  ...factory('slate-dev-logger'),
  ...factory('slate-html-serializer'),
  ...factory('slate-hyperscript'),
  ...factory('slate-plain-serializer'),
  ...factory('slate-prop-types'),
  ...factory('slate-react'),
  ...factory('slate-schema-violations'),
  ...factory('slate-simulator'),
]

export default configurations
