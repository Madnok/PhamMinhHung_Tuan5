import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  View,
  Image,
  ImageBackground,
} from "react-native";

const ItemBar = ({ listInfor, onPress }) => {
  return (
    <View style={styles.wrapContent}>
      <View style={styles.wrapImg}>
        <Image source={listInfor.img} />
      </View>
      <View style={styles.xxxRight}>
        <View style={styles.nameItem_nameShop}>
          <Text style={styles.nameItem}>{listInfor.nameItem}</Text>
          <Text style={styles.nameShop}>{listInfor.nameShop}</Text>
        </View>
        <View style={styles.xxxDiff}>
          <TouchableOpacity style={styles.btnChat} onPress={onPress}>
            <Text style={styles.textBtnChat}>Chat</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapContent: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E5E5E5",
    borderColor: "#b6b9ba",
    borderBottomWidth: 1,
  },
  wrapImg: {
    justifyContent: "center",
    alignItems: "center",
  },

  xxxRight: {
    flexDirection: "row",
    flexGrow: 9,
    height: "100%",
    marginLeft: 10,
  },

  nameItem_nameShop: {
    flexDirection: "column",
    justifyContent: "space-around",
    flexGrow: 5,
  },

  nameItem: {
    fontSize: 16,
    fontWeight: "500",
  },

  nameShop: {
    fontSize: 15,
    opacity: 0.5,
  },

  xxxDiff: {
    flexGrow: 4,
    maxWidth: 100,
    alignItems: "center",
    justifyContent: "center",
  },

  btnChat: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "red",
  },

  textBtnChat: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },
});

export default ItemBar;