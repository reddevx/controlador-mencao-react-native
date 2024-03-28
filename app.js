import React, { useState } from 'react';
import { View, Text, Picker, Button, StyleSheet } from 'react-native';

const App = () => {
  // Defina o estado inicial para cada matéria e suas menções
  const [mencoesPorMateria, setMencoesPorMateria] = useState([
    { materia: "LÍNGUA PORTUGUESA", mencao: "" },
    { materia: "INGLÊS", mencao: "" },
    { materia: "MATEMÁTICA", mencao: "" },
    { materia: "BIOLOGIA", mencao: "" },
    { materia: "GEOGRAFIA", mencao: "" },
    { materia: "FILOSOFIA", mencao: "" },
    { materia: "ESPANHOL", mencao: "" },
    { materia: "SOCIOLOGIA", mencao: "" },
    { materia: "PROGRAMAÇÃO WEB", mencao: "" },
    { materia: "PROGRAMAÇÃO DE APLICATIVOS", mencao: "" },
    { materia: "SEGURANÇA DE SISTEMAS DA INFORMAÇÃO", mencao: "" },
    { materia: "TCC", mencao: "" },
    { materia: "QUALIDADE E TESTE DE SOFTWARE", mencao: "" },
  ]);

  const handlePickerChange = (value, index) => {
    // Crie uma cópia do estado atual
    const novasMencoes = [...mencoesPorMateria];
    // Atualize a menção para a matéria selecionada
    novasMencoes[index].mencao = value;
    // Atualize o estado com as novas menções
    setMencoesPorMateria(novasMencoes);
  };

  const handleClear = () => {
    // Limpe todas as menções definindo-as como vazio
    const mencoesLimpa = mencoesPorMateria.map(materia => ({ ...materia, mencao: "" }));
    setMencoesPorMateria(mencoesLimpa);
  };

  const contarMencoes = () => {
    // Inicialize um objeto de contagem
    const contagem = {
      MB: 0,
      B: 0,
      R: 0,
      I: 0,
    };

    // Conte as menções para cada matéria
    mencoesPorMateria.forEach(({ mencao }) => {
      contagem[mencao]++;
    });

    return contagem;
  };

  const mencoesContadas = contarMencoes();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Digite as menções para cada disciplina:</Text>
      <View>
        {mencoesPorMateria.map((materia, index) => (
          <View key={index} style={styles.inputContainer}>
            <Text>Matéria {materia.materia}:</Text>
            <Picker
              style={styles.picker}
              selectedValue={materia.mencao}
              onValueChange={(itemValue) => handlePickerChange(itemValue, index)}>
              <Picker.Item label="MB" value="MB" />
              <Picker.Item label="B" value="B" />
              <Picker.Item label="R" value="R" />
              <Picker.Item label="I" value="I" />
            </Picker>
          </View>
        ))}
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Limpar" onPress={handleClear} />
        <Button
          title="Contabilizar"
          onPress={() => console.log('Menções:', mencoesContadas)}
        />
      </View>
      <View style={styles.contagemContainer}>
        <Text>MB: {mencoesContadas.MB}</Text>
        <Text>B: {mencoesContadas.B}</Text>
        <Text>R: {mencoesContadas.R}</Text>
        <Text>I: {mencoesContadas.I}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  picker: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  contagemContainer: {
    marginTop: 20,
  },
});

export default App;
