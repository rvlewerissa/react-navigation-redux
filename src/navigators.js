// @flow

import React from "react";
import { connect } from "react-redux";
import {
  TabNavigator as TabNav,
  DrawerNavigator as DrawerNav,
  StackNavigator as StackNav,
  addNavigationHelpers
} from "react-navigation";

export function TabNavigator(routes: Object, routeConfigs: Object) {
  return (navigationStoreKey: string) =>
    createRouter(TabNav, routes, routeConfigs, navigationStoreKey);
}

export function DrawerNavigator(routes: Object, routeConfigs: Object) {
  return (navigationStoreKey: string) =>
    createRouter(DrawerNav, routes, routeConfigs, navigationStoreKey);
}

export function StackNavigator(routes: Object, routeConfigs: Object) {
  return (navigationStoreKey: string) =>
    createRouter(StackNav, routes, routeConfigs, navigationStoreKey);
}

type Props = {
  dispatch: () => void,
  routeState: Object
};

function createRouter(navigator, routes, routeConfigs, navigationStoreKey) {
  let Router = navigator(routes, routeConfigs);

  function Wrapper(props: Props) {
    let { dispatch, routeState } = props;
    return (
      <Router
        navigation={addNavigationHelpers({
          dispatch,
          state: routeState
        })}
      />
    );
  }

  let mapDataToProps = state => {
    return {
      routeState: state[navigationStoreKey]
    };
  };

  let Container = connect(mapDataToProps)(Wrapper);

  let initScreen = Object.keys(routes)[0];
  Container.initScreen = initScreen;
  Container.router = Router;
  return Container;
}
