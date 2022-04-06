import { StyleSheet, View } from "react-native";
import React from "react";
import { Album } from "./";
import { IAlbum } from "models";
import { ScrollView, Text } from "react-native";
import { colors } from "react-native-elements";

interface AlbumListProps {
  title: string;
  albums: IAlbum[];
}

const AlbumList: React.FC<AlbumListProps> = (props) => {
  const { albums, title } = props;

  const albumComponents = albums.map((album) => (
    <Album key={album.id} album={album} />
  ));

  return (
    <View style={styles.contanier}>
      <Text style={styles.title}>{title}</Text>
      <ScrollView
        style={styles.wrapper}
        showsHorizontalScrollIndicator={false}
        horizontal
      >
        {albumComponents}
      </ScrollView>
    </View>
  );
};

export default AlbumList;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginBottom: 10,
  },
  contanier: {
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 3,
  },
  title: {
    fontSize: 22,
    color: colors.white,
    marginBottom: 20,
    fontWeight: "bold",
  },
});
