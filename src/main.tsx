
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ScrollableTabView, { DefaultTabBar } from '@react-native-oh-tpl/react-native-scrollable-tab-view';
import { DomesticNews } from './components/news/newsList'

export function Main(): JSX.Element {
  return (
    <ScrollableTabView
    style={{ marginTop: 20 }}
    initialPage={1}
    //renderTabBar={() => <DefaultTabBar />}
  >
    <DomesticNews tabLabel="国内新闻"></DomesticNews>
  </ScrollableTabView>
  )
}

const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
  });