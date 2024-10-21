import { Component } from "react";
import {View, Text, SafeAreaView, Button} from 'react-native';

class Counter extends Component {
     state = {
          count: 0,
     };

     incrementCount = () => {
          let updateCount = this.state.count + 1;
          this.setState({count: updateCount});
     }
     
     render(){
          return (
               <View>
                    <Text>Count : {this.state.count}</Text>
                    <Button title= "Increment" onPress={this.incrementCount} />
               </View>
          )
     }
}

export default Counter;