import React from 'react';
import PropTypes from 'prop-types';
import {View, TextInput} from 'react-native';
import styles from './styles';

function ListFilter({onFilter}) {
    return (
        <View>
            <TextInput 
                autoFocus
                placeholder="Search"
                style={styles.filter}
                onChangeText={onFilter}
            />
        </View>
    );
}

ListFilter.propTypes = {
    onFilter: PropTypes.func.isRequired,
};

export default ListFilter;