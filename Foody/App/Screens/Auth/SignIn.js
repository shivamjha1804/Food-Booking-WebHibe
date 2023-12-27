import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import Input from '../../Components/AuthStack/SignInComponent/Input'
import Button from '../../Components/CommonComponents/Button/Button'
import PreButton from '../../Components/AuthStack/SignInComponent/PreButton'
import { useDispatch } from 'react-redux'
import { setUser } from '../../Redux/reducer/User'


const SignIn = () => {
    const dispatch = useDispatch();
    return (
        <ImageBackground source={require("../../Assets/Image/AuthStack/SignIn/backgroundImage.png")} style={{ flex: 1 }}>
            <View style={styles.Container}>
                <View style={styles.Row1}>
                </View>
                <View style={styles.Row2}>
                    <View style={styles.Circle}>
                        <Image source={require("../../Assets/Image/AuthStack/SignIn/crossIcon.png")} />
                    </View>
                </View>
                <View style={styles.Row3}>
                    <Text style={styles.Label}>
                        Get Started with Lobster
                    </Text>
                </View>
                <View style={styles.Row4}>
                    <Text style={styles.Row4Col1}>
                        Don’t have an account?
                    </Text>
                    <Text style={styles.Row4Col2}>
                        Signup Now
                    </Text>
                </View>
                <View style={styles.Row5}>
                    <Input placeholder={"Email or Phone Number"} secureTextEntry={false} Icon={""} />
                </View>
                <View style={styles.Row6}>
                    <Input placeholder={"Enter Password"} secureTextEntry={true} Icon={"eye"} />
                </View>
                <View style={styles.Row7}>
                    <Text style={styles.Row7Col1}>
                        Forget Password ?
                    </Text>
                </View>
                <View style={styles.Row8}>
                    <Button
                        onPress={() => {
                            dispatch(setUser({}))
                        }}
                        buttonColor={"#FE724C"}
                        text={"Log In"}
                    />
                </View>
                <View style={styles.Row9}>
                    <Text style={styles.Row9Col1}>
                        or Continue
                    </Text>
                </View>
                <View style={styles.Row10}>
                    <PreButton buttonColor={"#1877F2"} color={"white"} text={"Continue with Facebook"} image={require("../../Assets/Image/AuthStack/SignIn/facebook.png")} />
                </View>
                <View style={styles.Row11}>
                    <PreButton buttonColor={"white"} color={"grey"} text={"Continue with Google"} image={require("../../Assets/Image/AuthStack/SignIn/google.png")} />
                </View>
                <View style={styles.Row12}>
                    <PreButton buttonColor={"#323643"} color={"white"} text={"Continue with Apple"} image={require("../../Assets/Image/AuthStack/SignIn/apple.png")} />
                </View>
            </View>
        </ImageBackground>
    )
}

export default SignIn

const styles = StyleSheet.create({
    Container: {
        backgroundColor: 'white',
        paddingHorizontal: 20,
        marginTop: "16%",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },

    Row1: {
        backgroundColor: '#D9D9D9',
        marginTop: 15,
        width: 75,
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 15,
        alignSelf: 'center'
    },

    Circle: {
        backgroundColor: '#D9D9D9',
        width: 25,
        height: 25,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },

    Row2: {
        alignItems: 'flex-end',
        marginVertical: 10
    },

    Row3: {
        marginBottom: 1
    },

    Label: {
        color: 'black',
        fontSize: 35,
        fontWeight: '800'
    },

    Row4: {
        flexDirection: 'row',
        columnGap: 10,
        marginVertical: 20
    },

    Row4Col1: {
        color: '#8C9099',
        fontSize: 15,
        fontWeight: '500'
    },

    Row4Col2: {
        color: 'black',
        fontSize: 15,
        fontWeight: '700'
    },

    Row5: {
        marginBottom: 10
    },

    Row6: {
        marginBottom: 1
    },

    Row7: {
        flexDirection: 'row-reverse',
        marginVertical: 15,
    },

    Row7Col1: {
        color: 'black',
        fontWeight: '600',
        fontSize: 15,
    },

    Row9: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15
    },

    Row9Col1: {
        color: 'black',
        fontSize: 18
    },

    Row10: {

    },

    Row11: {
        marginVertical: 10
    },

    Row12: {
        marginBottom: 15
    }
})