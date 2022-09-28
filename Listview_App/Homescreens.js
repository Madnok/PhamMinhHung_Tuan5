import React from "react";
import { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
  Alert,
  Image,
  FlatList,
  RefreshControl,
} from "react-native";
import ItemBar from "./component/ItemBar";

const DATA = [
  {
    id: "1",
    nameItem: "Nồi nấu lẩu",
    nameShop: "Shop Devang",
    img: require("../Listview_App/img//ca_nau_lau.png"),
  },
  {
    id: "2",
    nameItem: "1KG khô gà bơ tỏi",
    nameShop: "Shop LTD Food",
    img: require("../Listview_App/img/ga_bo_toi.png"),
  },
  {
    id: "3",
    nameItem: "Xe cần cẩu đa năng",
    nameShop: "Shop thế giới đồ chơi",
    img: require("../Listview_App/img/xa_can_cau.png"),
  },
  {
    id: "4",
    nameItem: "Đồ chơi dạng mô hình",
    nameShop: "Shop thế giới đồ chơi",
    img: require("../Listview_App/img/do_choi_dang_mo_hinh.png"),
  },
  {
    id: "5",
    nameItem: "Lãnh đạo giản đơn",
    nameShop: "Shop Minh Long Book",
    img: require("../Listview_App/img/lanh_dao_gian_don.png"),
  },
  {
    id: "6",
    nameItem: "Hiểu lòng con trẻ",
    nameShop: "Shop Minh Long Book",
    img: require("../Listview_App/img/hieu_long_con_tre.png"),
  },
  {
    id: "7",
    nameItem: "Trump thiên tài lãnh đạo",
    nameShop: "Shop Minh Long Book",
    img: require("../Listview_App/img/trump.png"),
  },
];

function alert(item) {
  Alert.alert(item.nameItem);
}

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text>
          Bạn có thắc mắc với sản phẩm vừa xem. Đưng ngại chat với shop
        </Text>
      </View>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ItemBar onPress={() => alert(item)} listInfor={item} />
        )}
        // refreshControl={
        //   <RefreshControl
        //     refreshing={isRefreshing}
        //     onRefresh={handleRefresh}
        //   />
        // }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {},
});

export default HomeScreen;