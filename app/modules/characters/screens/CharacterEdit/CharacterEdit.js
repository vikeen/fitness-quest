import React from 'react';
import {View} from 'react-native';
import {FormLabel, FormInput, Button} from 'react-native-elements';
import {connect} from 'react-redux';
import DropdownAlert from 'react-native-dropdownalert';

import styles from "./styles";
import {fetchMyCharacter, updateCharacter} from "../../actions";
import CharacterImageScrollView from "../../components/CharacterImageScrollView";

class CharacterEdit extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: "Character"
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
            isFetching: false,
            character: {}
        };
    }

    componentWillMount() {
        this.props.dispatch(fetchMyCharacter(this.props.user)).then(() => {
            this.setState({
                isReady: true,
                character: this.props.character
            });
        });
    }

    onSubmit = () => {
        const {character} = this.state;
        this.setState({isFetching: true});

        this.props.dispatch(updateCharacter(character)).then(() => {
            this.setState({isFetching: false});
            this.props.navigation.goBack();
        }, () => {
            this.setState({isFetching: false});
            this.dropdown.alertWithType('error', 'Oops! Something got messed up', "");
        });
    };

    onChangeText = (key, text) => {
        const character = Object.assign({}, this.state.character);
        character[key] = text;
        this.setState({character});
    };

    onCharacterImagePress = (imageUrl) => {
        const character = Object.assign({}, this.state.character, {imageUrl});
        this.setState({character});
    };

    render() {
        const {character, isFetching} = this.state;

        if (!this.state.isReady) {
            return null;
        }

        return (
            <View style={styles.container}>
                <DropdownAlert ref={ref => this.dropdown = ref} zIndex={1000}/>
                <FormLabel>Name</FormLabel>
                <FormInput
                    autoCapitalize='none'
                    clearButtonMode='while-editing'
                    underlineColorAndroid={"#fff"}
                    placeholder="Name"
                    autoFocus={false}
                    onChangeText={(text) => this.onChangeText("name", text)}
                    inputStyle={styles.inputContainer}
                    value={character.name}/>
                <FormLabel>Image</FormLabel>
                <CharacterImageScrollView character={character}
                                          onSelect={this.onCharacterImagePress}/>
                <Button
                    raised
                    title="SAVE"
                    disabled={isFetching}
                    borderRadius={4}
                    containerViewStyle={styles.containerView}
                    buttonStyle={styles.button}
                    textStyle={styles.buttonText}
                    onPress={this.onSubmit}/>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.authReducer.user,
        character: state.characterReducer.character
    }
}

export default connect(mapStateToProps)(CharacterEdit);