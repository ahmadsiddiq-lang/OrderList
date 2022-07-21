import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Card from './components/Card';

const data = [
  {
    order_id: '10981234566',
    status: 'Shipped',
    customer: 'Anugrah Store',
    qty: '1.541.000',
    total: '4.541.000',
    date: '13/03/2021 10:43',
  },
  {
    order_id: '10981234566',
    status: 'Shipped',
    customer: 'Anugrah Store',
    qty: '1.541.000',
    total: '4.541.000',
    date: '13/03/2021 10:43',
  },
  {
    order_id: '10981234566',
    status: 'Shipped',
    customer: 'Anugrah Store',
    qty: '1.541.000',
    total: '4.541.000',
    date: '13/03/2021 10:43',
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Order list</Text>
      <View style={styles.list}>
        {data.map((item, i) => {
          return <Card key={i} item={item} />;
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
});
