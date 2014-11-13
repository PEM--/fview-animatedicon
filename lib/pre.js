myRequire = function(what) {
  switch(what) {
    case 'famous/core/Surface': return famous.core.Surface;
    case 'famous/core/Modifier': return famous.core.Modifier;
    case 'famous/modifiers/StateModifier': return famous.modifiers.StateModifier;
    case 'famous/core/View': return famous.core.View;
    case 'famous/core/Transform': return famous.core.Transform;
    default:
      throw new Error('New require of ' + what);
  }
};

module = {};
libDefine = null;

define = function(func) {
  libDefine = func;
};
