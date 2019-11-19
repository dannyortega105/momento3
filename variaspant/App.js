import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Bienvenido</Text>
        <Button
          title="Ir a detalle"
          onPress={() => this.props.navigation.navigate('detalles')}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Detalles</Text>
        <Button
          title="Ir a detalle de nuevo"
          onPress={() => this.props.navigation.push('detalles')}
        />
        <Button
          title="Ir a inicio"
          onPress={() => this.props.navigation.navigate('inicio')}
        />
        <Button
          title="Volver"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator({
  inicio: HomeScreen,
  detalles: DetailsScreen,
});

export default createAppContainer(RootStack);
