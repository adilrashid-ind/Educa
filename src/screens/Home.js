import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Card from '../components/Card';
import card1 from '../Assets/images/card1.png';
import card2 from '../Assets/images/card2.png';
import {Searchbar} from 'react-native-paper';
import CardTwo from '../components/CardTwo';
import TopTab from '../components/TopTab';

export default function Home() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <ScrollView style={{backgroundColor: 'white', padding: 15}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Text style={{color: 'black', fontSize: 22}}>Hi, Christina</Text>
          <Text>What do you want to learn today?</Text>
        </View>
        <TouchableOpacity>
          <Icon name="notifications-outline" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 20}}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={{
            backgroundColor: '#F2F2F2',
            borderRadius: 7,
            elevation: 1,
            borderColor: '#E0E0E0',
          }}
        />
      </View>
      <View style={{marginTop: 20}}>
        <Text style={{color: 'black', fontSize: 20, fontWeight: '600'}}>
          Recent Learning
        </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{marginTop: 10}}>
          <Card
            image={card1}
            title="Mathematics"
            description="HighSchool Algebra ! Help and Review"
            progress={0.5}
            number="5/10"
          />
          <Card
            image={card2}
            title="Science"
            description="HighSchool Algebra ! Help and Review"
            progress={0.8}
            number="8/10"
          />
          <Card
            image={card1}
            title="Mathematics"
            description="HighSchool Algebra ! Help and Review"
            progress={0.5}
            number="5/10"
          />
        </ScrollView>
      </View>
      <View style={{marginTop: 20}}>
        <TopTab />
      </View>
      <View style={{marginTop: 20}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: 'black', fontSize: 18, fontWeight: '600'}}>
            Latest News
          </Text>
          <TouchableOpacity>
            <Text>See All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={{marginTop: 20}}>
          <CardTwo />
          <CardTwo />
          <CardTwo />
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
