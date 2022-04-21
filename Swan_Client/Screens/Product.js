import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

export default function Product({route, navigation}) {
  const itemId = route.params.item;
  const [item, setItem] = useState({});
  const [isLoading, setLoading] = useState(true);

  const getProduct = async () => {
    try {
      const response = await fetch(
        'https://swan-server.herokuapp.com/products/details/' + itemId,
      );
      const json = await response.json();
      setItem(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <SafeAreaView style={styles.body}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <ScrollView>
          <TouchableOpacity
            style={styles.boxIcon}
            onPress={() => navigation.navigate('Home')}>
            <Image
              style={styles.icon}
              source={require('../assets/img/left-arrow.png')}
            />
          </TouchableOpacity>
          <Image style={styles.img} source={{uri: item.img}} />
          <Text style={styles.titleText}>{item.title}</Text>

          <View style={styles.priceAndCouterContainer}>
            <Text style={styles.priceText}>$ {item.price}</Text>
            <View style={styles.counter}>
              <TouchableOpacity style={styles.iconBox2}>
                <Image
                  style={styles.icon2}
                  source={require('../assets/img/add.png')}
                />
              </TouchableOpacity>
              <Text style={styles.textCounter}>1</Text>
              <TouchableOpacity style={styles.iconBox2}>
                <Image
                  style={styles.icon2}
                  source={require('../assets/img/minus.png')}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.reviewContainer}>
            <TouchableOpacity>
              <Image
                style={styles.icon3}
                source={require('../assets/img/star.png')}
              />
            </TouchableOpacity>
            <Text style={styles.textRate}>{item.rating}</Text>
            <Text style={styles.textReview}>({item.ratingCount} review)</Text>
          </View>

          <Text style={styles.description}>Opis</Text>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.iconBox4}
              onPress={() => navigation.navigate('Favourite')}>
              <Image
                style={styles.icon4}
                source={require('../assets/img/favourite.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate('Cart')}>
              <Text style={styles.btntext}>Add to cart</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
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
    // backgroundColor: 'yellow',
  },

  img: {
    width: 330,
    height: 330,
    marginLeft: 40,
  },
  icon: {
    width: 25,
    height: 25,
    tintColor: '#B3B3B3',
  },
  boxIcon: {
    margin: 30,
    width: 40,
    height: 40,
    borderRadius: 6,
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // elevation: 2
  },

  iconBox2: {
    width: 30,
    height: 30,
    backgroundColor: '#F0F0F0',
    borderRadius: 6,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleText: {
    lineHeight: 30.5,
    fontFamily: 'NunitoSans-Regular',
    fontSize: 24,
    fontWeight: '600',
    color: '#303030',
    marginTop: 30,
    marginLeft: 30,
  },

  priceText: {
    lineHeight: 40,
    fontFamily: 'NunitoSans-Regular',
    fontSize: 30,
    fontWeight: '600',
    color: '#303030',
    marginLeft: 25,
  },

  priceAndCouterContainer: {
    // backgroundColor: 'red',
    flexDirection: 'row',
  },
  counter: {
    // backgroundColor: 'green',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginLeft: 115,
  },
  icon2: {
    width: 18,
    height: 18,
    tintColor: '#000000',
  },
  textCounter: {
    fontWeight: '600',
    fontFamily: 'NunitoSans-Regular',
    lineHeight: 25,
    fontSize: 20,
    color: '#000000',
    marginLeft: 15,
    marginRight: 15,
  },
  reviewContainer: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 25,
    marginTop: 5,
  },
  icon3: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  textRate: {
    fontWeight: '600',
    fontFamily: 'NunitoSans-Regular',
    fontSize: 18,
    color: '#303030',
    marginRight: 15,
  },
  textReview: {
    fontWeight: '600',
    fontFamily: 'NunitoSans-Regular',
    fontSize: 14,
    color: '#808080',
  },
  description: {
    fontWeight: '300',
    textAlign: 'justify',
    marginRight: 25,
    marginLeft: 25,
    fontFamily: 'NunitoSans-Regular',
    fontSize: 14,
    color: '#606060',
    marginTop: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 25,
  },
  icon4: {
    width: 24,
    height: 24,
    tintColor: '#000000',
  },

  iconBox4: {
    width: 60,
    height: 60,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F0F0',
    marginLeft: 20,
  },
  btn: {
    height: 60,
    width: 250,
    backgroundColor: '#013946',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    position: 'absolute',
    marginLeft: 100,
  },

  btntext: {
    color: '#ffffff',
    fontFamily: 'NunitoSans-Regular',
    fontSize: 18,
  },
});
