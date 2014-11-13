var AnimatedIcon = null;

FView.ready(function() {
  libDefine(myRequire, {}, module);
  AnimatedIcon = module.exports;
  FView.registerView('AnimatedIcon', AnimatedIcon);
});
