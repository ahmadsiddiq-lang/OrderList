import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Card({ item }) {
    return (
        <View style={styles.comtainer}>
            <View style={styles.head}>
                <View>
                    <Text>Order Id</Text>
                    <Text>{item?.status}</Text>
                </View>
                <Text>{item?.order_id}</Text>
            </View>
            <View>
                <View style={styles.item}>
                    <Text>Customer</Text>
                    <Text>{item?.customer}</Text>
                </View>
                <View>
                    <Text>Qty/Package</Text>
                    <Text>{item?.qty}</Text>
                </View>
                <View>
                    <Text>Total Item</Text>
                    <Text>{item?.total}</Text>
                </View>
                <View>
                    <Text>Order Date</Text>
                    <Text>{item?.date}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    comtainer: {
        borderWidth: 1,
        minHeight: 30,
        width: '100%',
    },
});
