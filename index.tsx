import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { Button, Pressable, StyleSheet, TextInput, KeyboardAvoidingView, Platform, View,Text} from "react-native";

// npm install expo-image (usar este código no terminal)

const foto = require("../assets/images/icon.png");

export default function Index() {
  const [image, setImage] = useState<string | null>(null);
  const [nome, setNome] = useState<string>("Jeniffer Santos");
  const [email, setEmail] = useState<string>("jeniffer santos@escola.pr.gov.br");
  const [telefone, setTelefone] = useState<string>("(42) 98429-6676");
  const [localizacao, setLocalizacao] = useState<string>("Ponta Grossa / PR");

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    console.log(result);
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <KeyboardAvoidingView 
      style={{ flex: 1 }} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.container}>
        <Pressable onPress={pickImage}>
          <Image source={image == null ? foto : image} style={styles.estiloFoto} />
        </Pressable>
        <Button title="Trocar imagem" onPress={pickImage} />
        
        <View style={styles.containerConteudo}>
          <View style={styles.containerNome}>
            <TextInput
              style={styles.nome}
              value={nome}
              onChangeText={setNome}
              placeholder="Digite seu nome"
            />
          </View>

          <Text style={styles.linha}>_______________________________________</Text>

          <View style={styles.containerDados}>
            <Ionicons name="person" size={24} color="white" />
            <TextInput
              style={styles.textoDados}
              value="17 anos"
              editable={false}
            />
          </View>

          <View style={styles.containerDados}>
            <Ionicons name="mail" size={24} color="white" />
            <TextInput
              style={styles.textoDados}
              value={email}
              onChangeText={setEmail}
              placeholder="Digite seu e-mail"
            />
          </View>

          <View style={styles.containerDados}>
            <Ionicons name="call" size={24} color="white" />
            <TextInput
              style={styles.textoDados}
              value={telefone}
              onChangeText={setTelefone}
              placeholder="Digite seu telefone"
            />
          </View>

          <View style={styles.containerDados}>
            <Ionicons name="home" size={24} color="white" />
            <TextInput
              style={styles.textoDados}
              value={localizacao}
              onChangeText={setLocalizacao}
              placeholder="Digite sua localização"
            />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black"
  },
  containerImg: {
    flex: 1,
    paddingTop: 60,
  },
  estiloFoto: {
    width: 300,
    height: 300,
  },
  containerConteudo: {
    flex: 1,
  },
  containerNome: {
    alignItems: "center",
  },
  nome: {
    fontSize: 40,
    color: "pink",
    fontWeight: "bold",
  },
  linha: {
    color: "white",
    fontSize: 20,
    marginBottom: 20,
  },
  containerDados: {
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  textoDados: {
    marginLeft: 10,
    color: "white",
    fontSize: 24,
  },
});
