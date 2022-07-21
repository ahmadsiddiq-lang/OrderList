import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { stylesglobal } from '../../styles';

export default function Card({ item }) {
    return (
        <View style={styles.comtainer}>
            <View style={styles.head}>
                <View style={styles.item}>
                    <Text style={styles.order}>Order Id</Text>
                    <Text style={[stylesglobal.text, styles.idOrder]}>{item?.order_id}</Text>
                </View>
                <Text style={[stylesglobal.text, item?.status === 'Shipped' ? styles.status : styles.statusComplate]}>{item?.status}</Text>
            </View>
            <View>
                <View style={styles.item}>
                    <Text style={stylesglobal.text}>Customer</Text>
                    <Text style={stylesglobal.text}>{item?.customer}</Text>
                </View>
                <View style={styles.item}>
                    <Text style={stylesglobal.text}>Qty/Package</Text>
                    <Text style={stylesglobal.text}>{item?.qty}</Text>
                </View>
                <View style={styles.item}>
                    <Text style={stylesglobal.text}>Total Item</Text>
                    <Text style={stylesglobal.text}>{item?.total}</Text>
                </View>
                <View style={styles.item}>
                    <Text style={stylesglobal.text}>Order Date</Text>
                    <Text style={stylesglobal.text}>{item?.date}</Text>
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
        borderRadius: 4,
        overflow: 'hidden',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderColor: '#E0E0E0',
    },
    head: {
        borderBottomWidth: 0.3,
        borderColor: '#E0E0E0',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 15,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    order: {
        color: 'black',
    },
    status: {
        color: '#FF7B00',
        fontWeight: '700',
    },
    statusComplate: {
        fontWeight: '700',
        color: '#219653',
    },
    idOrder: {
        fontWeight: '700',
        color: '#052A49',
    },
});
