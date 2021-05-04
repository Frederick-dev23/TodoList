/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 import React, { Fragment, Component } from 'react';
 import {
   SafeAreaView,
   StyleSheet,
   View,
   Button,
   Text
 } from 'react-native';

 import { connect } from 'react-redux';
 import { changeCount } from './actions/counts';
 import { bindActionCreators } from 'redux';

 
 
 class App extends Component {
    constructor(props){
        super(props)
        this.state = { count: 0 };
    }
   decrementCount() {
       console.log("decrement");
     let { count } = this.state;
     count--;
     this.setState({
       count
     })
   }
   incrementCount() {
       console.log("increment");
       console.log(this.state);
       let { count, actions } = this.props;
       count++;
       actions.changeCount(count);
   }
   render() {
     const { count } = this.state;
     return (
       <View styles={styles.container}>
         <Button
           title="increment"
           onPress={() => this.incrementCount()}
         />
         <Text>{count}</Text>
         <Button
           title="decrement"
           onPress={() => this.decrementCount()}
         />
       </View>
     );
   }
 };
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center'
   }
 });

 const mapStateToProps = state => ({
    count: state.count,
  });
  const ActionCreators = Object.assign(
    {},
    changeCount,
  );
  const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
  });

  export default connect(mapStateToProps, mapDispatchToProps)(App)
 //export default App;