import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import {Rating} from 'react-native-ratings';

const flatListColData = require("./flatListColdata")

export default function App() {
  return (
    <View style={styles.container}>
      <View stlye={{flex:0.1, backgroundColor:'#1BA9FF',justifyContent:'space-around',alignItems:'center',flexDirection:'row'}}>
      <StatusBar style="auto" />
      <View style={{flex:0.5, backgroundColor:'white', flexDirection:'row', padding:5}}>
          <Text style={{ color: "#7D5B5B", paddingLeft: 10, paddingTop: 3 }}>Dây cáp USB</Text>
      </View>
        <Image source={require("./images/giohang.png")} 
        style={{height: 24, width:24, alignContent:'flex-end', marginLeft:10}}/>
        <Image source={require('./images/Group_2.png')}/>
    </View>
      <View style={{flex:0.86,justifyContent:'center',alignContent:'center'}}>
        <FlatList data={flatListColData}
          key={'#'}
          numColumns={2}
          renderItem={
            ({item, index}) => {
              return(
                <View style={{padding:5}}>
                    <Image source={{ uri: item.photo }} style={styles.imageleft}></Image>
                    <Text>Cáp chuyển từ cổng từ {"\n"}USB sang PS2...</Text>
                    <View style={{flex:1,marginTop:10, flexDirection:'row'}}>
                      <Rating imageSize={15} ratingCount={5} startinValue={5} />
                      <Text>(10)</Text>
                    </View>
                    <View style={{flex:1,flexDirection:'row',justifyContent: "center",alignItems: "center",}}>
                        <Text style={{fontWeight:'bold'}}>69.900 đ</Text>
                        <Text style={{color:'#969DAA',paddingLeft:10}}>-39%</Text>
                      </View>
                </View>
              )
            }
          }
          ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:20,
    marginLeft:50
    
  },
  imageleft:{
    width:140,
    height:80,
    flex:0.45,
    resizeMode:'contain'
  },
});
