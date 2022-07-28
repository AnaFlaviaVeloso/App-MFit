import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";


const SearchBar = (props) => {
  return (
    <View style={styles.container}>
      <View
        style={
          !props.clicked
            ? styles.searchBar__unclicked
            : styles.searchBar__clicked
        }
      >
        <Feather
          name="search"
          size={17}
          color= '#EAEAEA'
          style={{ marginLeft: 1 }}
        />
        <TextInput
          style={styles.input}
          placeholder="Buscar Usuário"
          value={props.searchPhrase}
          onChangeText={props.setSearchPhrase}
          onFocus={() => {
            props.setClicked(true);
          }}
        />
        
        {props.clicked && (
          <Entypo name="cross" size={20} color="black" style={{ padding: 1 }} onPress={() => {
              props.setSearchPhrase("")
          }}/>
        )}
      </View>
      {props.clicked && (
        <View>
          <Button
            title="Cancel"
            onPress={() => {
              Keyboard.dismiss();
              props.setClicked(false);
            }}
          ></Button>
        </View>
      )}
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",  
  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    height: 36,
    width: 217,
    borderRadius: 6,
    alignItems: "center",
    backgroundColor: '#494D56',    
    color: '#EAEAEA',
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    backgroundColor: '#494D56',
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "space-evenly",
    color: '#EAEAEA',
    height: 36,
    width: 217,
  },
  input: {
    fontSize: 17,
    marginLeft: 10,
    width: "80%",
    backgroundColor: '#494D56',
    color: '#EAEAEA',
  },
});