import React from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';

class UsuarioGithub extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dados: {},
            usuario: 'octocat'
        };
        this.fetchDados = this.fetchDados.bind(this);
    }

    fetchDados() {
        fetch(`https://api.github.com/users/${this.state.usuario}`)
            .then(response => response.json())
            .then(json => this.setState({ dados: json }))
            .catch(err => this.setState({ dados: { err } }));
    }

    componentDidMount() {
        this.fetchDados();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.texto}>Nome: {JSON.stringify(this.state.dados.name)}</Text>
                <Text style={styles.texto}>Username: {JSON.stringify(this.state.dados.login)}</Text>
                <Text style={styles.texto}>Email: {JSON.stringify(this.state.dados.email)}</Text>
                <Text style={styles.texto}>Perfil: {JSON.stringify(this.state.dados.html_url)}</Text>
                <Text style={styles.texto}>Local: {JSON.stringify(this.state.dados.location)}</Text>
                <Text style={styles.texto}>Seguidores: {JSON.stringify(this.state.dados.followers)}</Text>
                <Text style={styles.texto}>Seguindo: {JSON.stringify(this.state.dados.following)}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={usuario => this.setState({ usuario })}
                    value={this.state.usuario}
                />
                <Button
                    onPress={this.fetchDados}
                    title="Buscar Dados"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: '80%',
        marginVertical: 10,
        paddingHorizontal: 8
    },
    texto: {
        marginBottom: 10
    }
});

export default UsuarioGithub;
