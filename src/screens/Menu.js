import React from 'react';
import { StyleSheet, Text, View,ScrollView,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Burger from './Burger';
export default class Menu extends React.Component {
    state={
        items:[{'name':'Garlic Bread','time':'00:00-24:00'},
               {'name':'Chicken Burger','time':'06:00-20:00'},
               {'name':'Wagu Burger','time':'03:00-22:00'},
                {'name':'Hawaiian Pizza','time':'10:00-24:00'},
                {'name':'Salt and Pepper Calarmari','time':'12:00-24:00'},
                {'name':'Club Sandwiches','time':'00:00-24:00'},
                {'name':'Garlic Bread','time':'06:00-18:00'},
                {'name':'Chicekn Burger','time':'06:00-20:00'}]
    }
  render() {
    return (
        <View style={{flex:1,marginTop:23,backgroundColor:'#E0E0E0'}}>
            <View style={styles.header}>
                <TouchableOpacity style={{borderRadius:60}} onPress={()=>this.props.navigation.goBack()}>
                <Icon
                    containerStyle={{}}
                    name='ios-arrow-back'
                    type='ionicon'
                    color='#ffffff'
                    size={32} />
                </TouchableOpacity>
                <Text style={{fontSize:20,color:'#ffffff'}}>AVAILABLE MENUS</Text>
                <View></View>
            </View>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            {this.state.items.map((item,i)=>(
                    <View key={i} >
                        <View style={{flex:1,flexDirection:'row', justifyContent:'center',marginBottom:10}}>
                            <View style={{flex:1,flexDirection:'column',justifyContent:'flex-start',paddingLeft:30,paddingTop:15}}>
                                <Text style={{fontSize:18,color:'#616161'}}>{item.name}</Text>
                                <Text style={{fontSize:15,color:'#616161'}}>Available Mon-Sun: {item.time}</Text>
                            </View>
                            <TouchableOpacity style={{paddingTop:20,paddingRight:25,borderRadius:60}} onPress={()=>this.props.navigation.navigate('Burger')}>
                                <Icon
                                    style={{}}
                                    name='ios-arrow-forward'
                                    type='ionicon'
                                    size={32} />
                            </TouchableOpacity>
                        </View>
                    <View style={{borderTopColor: '#E0E0E0',borderTopWidth: 1,marginTop:5}}/>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column' ,
    backgroundColor: '#ffffff',
    margin:15,
   
  },
  header:{
    height:60,backgroundColor:'#FF3D00',flexDirection:'row',padding:15, justifyContent:'space-between'
  },
});
