import { ScrollView, StyleSheet, Text, View } from 'react-native';
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
    status: 'Completed',
    customer: 'Anugrah Store',
    qty: '1.541.000',
    total: '4.541.000',
    date: '13/03/2021 10:43',
  },
  {
    order_id: '10981234566',
    status: 'Completed',
    customer: 'Anugrah Store',
    qty: '1.541.000',
    total: '4.541.000',
    date: '13/03/2021 10:43',
  },
  {
    order_id: '10981234566',
    status: 'Completed',
    customer: 'Anugrah Store',
    qty: '1.541.000',
    total: '4.541.000',
    date: '13/03/2021 10:43',
  },
  {
    order_id: '10981234566',
    status: 'Completed',
    customer: 'Anugrah Store',
    qty: '1.541.000',
    total: '4.541.000',
    date: '13/03/2021 10:43',
  },
  {
    order_id: '10981234566',
    status: 'Completed',
    customer: 'Anugrah Store',
    qty: '1.541.000',
    total: '4.541.000',
    date: '13/03/2021 10:43',
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order list</Text>
      <View style={styles.list}>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          {data.map((item, i) => {
            return (
              <View style={styles.listItem}>
                <Card key={i} item={item} />
              </View>
            );
          })}
        </ScrollView>
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
    paddingHorizontal: 16,
  },
  title: {
    color: '#000000',
    textAlign: 'center',
    marginTop: 25,
    marginBottom: 20,
    fontWeight: '700',
    fontSize: 24,
  },
  listItem: {
    marginBottom: 16,
  },
});
