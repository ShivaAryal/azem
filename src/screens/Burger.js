import React from 'react';
import { StyleSheet, Text, View,TextInput,Image,TouchableOpacity,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AddItems from './AddItems';
import MyCurrentOrders from './MyCurrentOrders';
export default class Burger extends React.Component {
    setIconColor=()=>{
        if(this.state.starColor=='#000000'){
        this.setState({starColor:'#ffffff'})
        }else{
            this.setState({starColor:'#000000'})
        }
    }
    state={
        starColor:'#ffffff',
        items:[{'name':'Garlic Bread','description':'No description available','price':'$3.50'},
        {'name':'Chicken Burger','description':'Chook Chook','price':'$14.50'},
        {'name':'Wagu Burger','description':'Best beef on the planet','price':'$15.50'},
        {'name':'Hawaiian Pizza','description':'No description available','price':'$14.50'},
        {'name':'Salt & Pepper Calarmari','description':'A great little squid','price':'$15.50'},
        {'name':'Club Sandwiches','description':'No description available','price':'$14.50'},
        {'name':'Garlic Bread','description':'No description available','price':'$3.50'},
        {'name':'Chicken Burger','description':'Chook Chook','price':'$14.50'}]
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
                <Text style={{paddingLeft:135,fontSize:20,color:'#ffffff'}}>BURGER</Text>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('MyCurrentOrders')} style={{marginTop:5,borderRadius:35,marginLeft:70}}>
                <FeatherIcon
                    containerStyle={{}}
                    name='shopping-cart'
                    type='feather'
                    color='#ffffff'
                    size={24} />
                </TouchableOpacity>
                <TouchableOpacity onPress={this.setIconColor} style={{borderRadius:35,marginLeft:25}}>
                <Icon
                    containerStyle={{}}
                    name='md-star-outline'
                    type='ionicon'
                    color={this.state.starColor}
                    size={32} />
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            {this.state.items.map((item,i)=>(
                    <View key={i} >
                        <View style={{flex:1,flexDirection:'row', justifyContent:'center',marginBottom:5}}>
                            <View style={{flex:1,flexDirection:'column',justifyContent:'flex-start',paddingTop:15}}>
                                <Text style={{fontSize:17,color:'#424242'}}>{item.name}</Text>
                                <Text style={{fontSize:15,color:'#616161'}}>{item.description}</Text>
                            </View>
                            <Text style={{fontSize:15,marginVertical:30,marginHorizontal:30}}>{item.price}</Text>
                            <View style={{alignItems:'center',paddingTop:20,paddingRight:10}}>
                                <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('AddItems')} >
                                    <Text style={styles.buttonText}>Order</Text>
                                </TouchableOpacity>
                            </View>
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
    padding:15
  },
  header:{
    height:60,backgroundColor:'#FF3D00',flexDirection:'row',padding:15
  },
  button:{
    width:70,
    borderRadius:15,
    borderWidth: 2,
    borderColor: '#ff0000',
    marginVertical:5,
    paddingVertical:5
  },
  buttonText:{
    fontSize:16,
    fontWeight:'400',
    color:'#ff0000',
    textAlign:'center'
  }
});
