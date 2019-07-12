/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  View,
  Button,
  Text,
} from 'react-native';


import { Portal, FAB } from 'react-native-paper';
import { Icon } from 'react-native-elements';

const SwapIcon = ({ size, color }) => {
  return (
      <Icon
          name="exchange"
          type="font-awesome"
          color={color} />
  );
}

const FlightIcon = ({ size, color }) => {
  return (
      <Icon
          name="plane"
          type="font-awesome"
          color={color} />
  );
}

const OffIcon = ({ size, color }) => {
  return (
      <Icon
          name="bell-slash"
          type="font-awesome"
          color={color} />
  );
}

const StatusIcon = ({ size, color }) => {
  return (
      <Icon
          name="adjust"
          type="font-awesome"
          color={color} />
  );
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'A',
      fabIsOpen: false,
    };
  }

  actions() {
    if (this.state.mode === 'A') {
      return new Array({icon: FlightIcon, label: 'Flight'}, {icon: SwapIcon, label: 'Swap'});
    } else if (this.state.mode === 'B') {
      return new Array({icon: OffIcon, label: 'Off'}, {icon: StatusIcon, label: 'Status'});
    }
    return new Array();
  }

  render() {
    return (
      <Portal.Host>
        <SafeAreaView>
          <View style={{ flexDirection: 'row', width: '100%', height: 100, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{borderWidth: this.state.mode === 'A' ? 1 : 0, borderColor: 'black', borderRadius: 5}}>
              <Button onPress={() => this.setState({ mode: 'A' })} title="Mode A" color="#841584" accessibilityLabel="Mode A button"/>
            </View>
            <View style={{borderWidth: this.state.mode === 'B' ? 1 : 0, borderColor: 'black', borderRadius: 5}}>
              <Button onPress={() => this.setState({ mode: 'B' })} title="Mode B" color="#235476" accessibilityLabel="Mode B button"/>
            </View>
          </View>
          <Text style={{textAlign: 'center'}}>WHAT SHOULD HAPPEN</Text>
          <View style={{borderWidth: 1, borderRadius: 10, margin: 10, borderColor: '#841584', alignItems: 'center'}}>
          <Text>Icons when in mode A</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, paddingHorizontal: 50, width: '100%'}}>
              <Text>Flight icon : </Text>
              <FlightIcon></FlightIcon>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, paddingHorizontal: 50, width: '100%'}}>
              <Text>Swap icon : </Text>
              <SwapIcon></SwapIcon>
            </View>
          </View>
          <View style={{borderWidth: 1, borderRadius: 10, margin: 10, borderColor: '#235476', alignItems: 'center'}}>
          <Text>Icons when in mode B</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, paddingHorizontal: 50, width: '100%'}}>
              <Text>Off icon : </Text>
              <OffIcon></OffIcon>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, paddingHorizontal: 50, width: '100%'}}>
              <Text>Status icon : </Text>
              <StatusIcon></StatusIcon>
            </View>
          </View>
          <View style={{marginTop: 20, marginHorizontal: 20}}>
            <Text style={{marginLeft: 20, marginVertical: 5}}>1. We start in mode A. If you open the FAB:Group, the icons and labels do not mismatch.</Text>
            <Text style={{marginLeft: 20, marginVertical: 5}}>2. Close the FAB.Group.</Text>
            <Text style={{marginLeft: 20, marginVertical: 5}}>3. Switch to mode B.</Text>
            <Text style={{marginLeft: 20, marginVertical: 5}}>4. Re-open the FAB.Group.</Text>
            <Text style={{marginLeft: 20, marginVertical: 5}}>4. Witness the mismatch between icons and labels.</Text>
            <Text style={{marginLeft: 20, marginVertical: 5}}></Text>
          </View>
          <Portal>
            <FAB.Group
            open={this.state.fabIsOpen}
            icon={this.state.fabIsOpen ? 'remove' : 'add'}
            actions={this.actions()}
            onStateChange={({ open }) => { this.setState({ fabIsOpen: open }) }}>
            </FAB.Group>
          </Portal>
        </SafeAreaView>
      </Portal.Host>
    );
  }
};

export default App;
