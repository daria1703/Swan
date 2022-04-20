import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  ScrollView,
} from 'react-native';
import logo from '../logo.png';

export default function Favourite({navigation}) {
  const [favourite, setFavourite] = useState([
    {
      name: 'Bracelet',
      id: '1',
      price: '$ 50.00',
      image: require('../assets/img/b1.jpg'),
    },
    {
      name: 'Ring',
      id: '2',
      price: '$ 250.00',
      image: require('../assets/img/r1.jpg'),
    },
    {
      name: 'Necklace',
      id: '3',
      price: '$ 125.00',
      image: require('../assets/img/n1.jpg'),
    },
    {
      name: 'Earrings',
      id: '4',
      price: '$ 200.00',
      image: require('../assets/img/e1.jpg'),
    },
    {
      name: 'Bracelet',
      id: '5',
      price: '$ 50.00',
      image: require('../assets/img/b1.jpg'),
    },
    {
      name: 'Ring',
      id: '6',
      price: '$ 250.00',
      image: require('../assets/img/r1.jpg'),
    },
    {
      name: 'Necklace',
      id: '7',
      price: '$ 125.00',
      image: require('../assets/img/n1.jpg'),
    },
    {
      name: 'Earrings',
      id: '8',
      price: '$ 200.00',
      image: require('../assets/img/e1.jpg'),
    },
    {
      name: 'Bracelet',
      id: '9',
      price: '$ 50.00',
      image: require('../assets/img/b1.jpg'),
    },
    {
      name: 'Ring',
      id: '28',
      price: '$ 250.00',
      image: require('../assets/img/r1.jpg'),
    },
    {
      name: 'Necklace',
      id: '90',
      price: '$ 125.00',
      image: require('../assets/img/n1.jpg'),
    },
  ]);

  return (
    <View style={styles.body}>
      <View style={styles.favouritesContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Image
            style={styles.icon}
            source={require('../assets/img/serch.png')}
          />
        </TouchableOpacity>
        <View style={styles.title}>
          <Text style={styles.textFavourite}>Favourites</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Image
            style={styles.icon2}
            source={require('../assets/img/bag.png')}
          />
        </TouchableOpacity>
      </View>

      <SafeAreaView>
        <ScrollView>
          <FlatList
            keyExtractor={item => item.id}
            data={favourite}
            renderItem={({item}) => (
              <View style={styles.cardContainer}>
                <View style={styles.card}>
                  <TouchableOpacity
                    style={styles.imgBox}
                    onPress={() => navigation.navigate('Product')}>
                    <Image style={styles.img} source={item.image} />
                  </TouchableOpacity>
                  <View style={styles.favouritesTextContainer}>
                    <Text style={styles.cardTitle}>{item.name}</Text>
                    <Text style={styles.cardPrice}>{item.price}</Text>
                  </View>
                  <View style={styles.iconCardContainer}>
                    <TouchableOpacity style={styles.iconBox3}>
                      <Image
                        style={styles.icon3}
                        source={require('../assets/img/cancel.png')}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconBox3}>
                      <Image
                        style={styles.icon2}
                        source={require('../assets/img/bag.png')}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          />
          <View style={styles.saveContainer} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
  },
  favouritesContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 10,
    height: 60,
    flexDirection: 'row',
  },
  icon: {
    width: 30,
    height: 30,
    margin: 30,
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 130,
  },
  textFavourite: {
    fontFamily: 'Gelasio-SemiBold',
    fontSize: 18,
    color: '#303030',
  },
  icon2: {
    width: 20,
    height: 24,
    margin: 26,
  },
  cardContainer: {
    marginTop: 2,
    height: 120,
    alignItems: 'center',
  },
  card: {
    height: 120,
    flexDirection: 'row',
    width: 320,
    alignItems: 'center',
    elevation: 0.3,
    // backgroundColor:'yellow'
  },
  imgBox: {
    width: 100,
    height: 100,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: '100%',
    width: '100%',
  },
  cardTitle: {
    marginLeft: 20,
    color: '#242424',
    fontSize: 15,
    fontFamily: 'NunitoSans-Regular',
    fontWeight: '600',
    width: 150,
  },
  favouritesTextContainer: {
    marginTop: 5,
    height: 100,
    width: 150,
  },
  cardPrice: {
    marginLeft: 20,
    color: '#242424',
    fontSize: 17,
    fontFamily: 'NunitoSans-Regular',
    fontWeight: '700',
    width: 290,
  },
  iconCardContainer: {
    height: 100,
    width: 30,
    justifyContent: 'space-between',
  },
  iconBox3: {
    width: 25,
    height: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon3: {
    width: 12,
    height: 12,
    tintColor: '#000000',
  },
  saveContainer: {
    height: 95,
    backgroundColor: '#ffffff',
  },
});
