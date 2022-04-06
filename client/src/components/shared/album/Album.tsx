import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { IAlbum } from "models";
import { colors } from "variables";

interface AlbumProps {
  album: IAlbum;
}

const Album: React.FC<AlbumProps> = (props) => {
  const { album } = props;

  return (
    <View style={styles.wrapper}>
      <Image style={styles.image} source={{ uri: album.picture }} />

      <Text numberOfLines={2} style={styles.title}>
        {album.name}
      </Text>
    </View>
  );
};

export default Album;

const styles = StyleSheet.create({
  wrapper: {
    marginRight: 15,
    width: 150,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 4,
  },

  title: {
    color: colors.secondary,
    fontSize: 16,
    marginTop: 7,
    fontWeight: "bold",
  },
});
