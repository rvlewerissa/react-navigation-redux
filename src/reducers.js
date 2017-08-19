// @flow

export function navigationReducer(navigator: Object) {
  let router = navigator.router;
  let initScreen = navigator.initScreen;
  let initTabState = router.router.getStateForAction(
    router.router.getActionForPathAndParams(initScreen)
  );
  return (state: Object = initTabState, action: Object) => {
    let nextState = router.router.getStateForAction(action, state);
    return nextState || state;
  };
}
