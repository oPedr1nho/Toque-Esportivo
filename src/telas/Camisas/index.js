import React from 'react';
import { FlatList, ScrollView, View, StyleSheet } from 'react-native';
import FilmeCard from '../../componentes/FilmeCard.js';

import filmes from '../../mocks/filmes.js';

export default function Filmes() {
    return (
        <ScrollView style={styles.container}>
            <FlatList
                data={filmes}
                renderItem={({ item }) => (
                    <FilmeCard nome={item.nome} imagem={item.imagem} preco={item.preco} />
                )}
                keyExtractor={item => item.id}
                numColumns={2}
                contentContainerStyle={styles.flatListContent}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
    },
    flatListContent: {
        padding: 16,
    },
});
