import {StyleSheet} from 'react-native';
import {theme} from "../../index";

const {padding, color, fontSize, fontFamily, windowWidth, normalize} = theme;

const resizeMode = 'contain';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.white
    },

    topContainer: {
        flex: 1,
        paddingHorizontal: 15,
        paddingBottom: padding * 2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: color.brandPrimary,
    },

    image: {
        height: 300,
        width: 300,
        backgroundColor: color.brandPrimary,
        marginBottom: padding,
        resizeMode
    },

    subText: {
        color: "#414141",
        fontSize: fontSize.large,
        lineHeight: fontSize.large + 10,
        marginVertical: padding * 2
    },

    //===============================

    bottomContainer: {
        backgroundColor: "white",
        paddingVertical: padding * 3,
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0
        }
    },

    buttonContainer: {
        justifyContent: "center",
        alignItems: "center"
    },

    containerView: {
        width: windowWidth - 40
    },

    socialButton: {
        height: normalize(55),
        borderRadius: 4,
        marginTop: 0,
        marginBottom: 0
    },

    button: {
        backgroundColor: color.brandPrimary,
        height: normalize(55)
    },

    buttonText: {
        fontSize: fontSize.regular + 2,
        fontFamily: fontFamily.medium
    },

    bottom: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: padding * 2
    },

    bottomText: {
        fontSize: fontSize.regular,
        fontFamily: fontFamily.medium,
        marginRight: 5,
        color: "#414141"
    },

    signInText: {
        fontSize: fontSize.regular,
        color: color.brandPrimary,
        fontFamily: fontFamily.medium
    },

    orContainer: {
        justifyContent: "center",
        alignItems: "center",
        height: 40,
        width: windowWidth
    },

    divider: {
        backgroundColor: '#D0D5DA',
        position: "absolute",
        top: 19,
        left: 20,
        right: 20
    },

    orText: {
        backgroundColor: color.white,
        fontSize: fontSize.regular,
        fontFamily: fontFamily.medium,
        color: "#414141",
        paddingHorizontal: padding
    }
});

export default styles;