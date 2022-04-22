import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  FlatList,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';

export default function Home({navigation}) {
  const [choice] = useState([
    {name: 'Popular', id: '1', img: require('../assets/img/star.png')},
    {name: 'Rings', id: '2', img: require('../assets/img/ring.png')},
    {name: 'Bracelets', id: '3', img: require('../assets/img/bracelet.png')},
    {name: 'Necklaces', id: '4', img: require('../assets/img/necklace.png')},
    {name: 'Earrings', id: '5', img: require('../assets/img/earring.png')},
  ]);

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const getProducts = async () => {
    try {
      const response = await fetch(
        'https://swan-server.herokuapp.com/products',
      );
      //const response = await fetch('http://localhost:3000/products');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <View style={styles.body}>
      <View style={styles.serchAndeTC}>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Image
            style={styles.icon}
            source={require('../assets/img/serch.png')}
          />
        </TouchableOpacity>
        <View style={styles.title}>
          <Text style={styles.textSwan}>THE SWAN</Text>
          <Text style={styles.textHouse}>HOUSE</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Image
            style={styles.icon}
            source={require('../assets/img/bag.png')}
          />
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          numColumns={5}
          style={styles.flatListChoice}
          keyExtractor={item => item.id}
          data={choice}
          renderItem={({item}) => (
            <View style={styles.rowChoice}>
              <View style={styles.choiceBox}>
                <TouchableOpacity style={styles.iconBox}>
                  <Image style={styles.icon2} source={item.img} />
                </TouchableOpacity>
                <Text style={styles.iconText}>{item.name}</Text>
              </View>
            </View>
          )}
        />
      </View>
      <SafeAreaView style={styles.productListContainer}>
        <ScrollView style={styles.productList}>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <FlatList
              numColumns={2}
              style={styles.productList}
              keyExtractor={item => item.id}
              data={data}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={styles.productCard}
                  onPress={() =>
                    navigation.navigate('Product', {item: item._id})
                  }>
                  <ImageBackground
                    source={{uri: item.img}}
                    resizeMode="cover"
                    style={styles.image}>
                    <TouchableOpacity
                      style={styles.iconBox2}
                      onPress={() => navigation.navigate('Cart')}>
                      <Image
                        style={styles.icon3}
                        source={require('../assets/img/shopping-bag.png')}
                      />
                    </TouchableOpacity>
                    <Text style={styles.textCardTttle}>{item.title}</Text>
                    <Text style={styles.textCardPrice}>$ {item.price}</Text>
                  </ImageBackground>
                </TouchableOpacity>
              )}
            />
          )}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
  },

  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 130,
    // backgroundColor: 'yellow'
  },

  rowChoice: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textSwan: {
    fontFamily: 'Gelasio-SemiBold',
    fontSize: 18,
    color: '#303030',
  },

  textHouse: {
    fontFamily: 'Gelasio-SemiBold',
    fontSize: 18,
    color: '#013946',
  },

  serchAndeTC: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'green',
    marginTop: 40,
    marginBottom: 10,
    height: 60,
    flexDirection: 'row',
  },

  icon: {
    width: 30,
    height: 30,
    margin: 30,
  },

  icon2: {
    width: 25,
    height: 25,
  },

  iconBox: {
    width: 44,
    height: 44,
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconText: {
    color: '#000000',
    fontFamily: 'NunitoSans-Regular',
    fontSize: 14,
    textAlign: 'center',
  },

  choiceBox: {
    // backgroundColor: 'red',
    width: 80,
    height: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  flatListChoice: {
    // backgroundColor: 'yellow',
    marginBottom: 10,
    height: 80,
  },

  productCard: {
    width: 170,
    height: 270,
    // backgroundColor: 'purple',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 10,
  },
  productList: {
    width: '100%',
    height: '100%',
    // backgroundColor: 'yellow',
  },
  // productListContainer:{
  //     height: '100',
  //     width: '100%',
  //     backgroundColor: 'red',
  // },
  image: {
    height: 270,
    width: 170,
  },
  iconBox2: {
    width: 35,
    height: 35,
    marginLeft: 125,
    marginTop: 180,
    backgroundColor: '#DCDCDC',
    borderRadius: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon3: {
    width: 20,
    height: 20,
  },

  textCardTttle: {
    marginTop: 10,
    fontFamily: 'NunitoSans-Regular',
    lineHeight: 19,
    fontSize: 14,
    color: '#606060',
  },
  textCardPrice: {
    fontFamily: 'NunitoSans-Regular',
    lineHeight: 19,
    fontSize: 14,
    fontWeight: '700',
    fontStyle: 'normal',
    color: '#303030',
  },
});
