import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import InputBox from '../components/InputBox';
import SubmitButton from '../components/Forms/SubmitButton';


const Login = ({navigation}) => {
  // global state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      if (!email || !password) {
        Alert.alert('Please fill all fields');
        setLoading(false);
        return;
      }
      if (!email.includes('@')) {
        Alert.alert('Enter valid Email');
        setLoading(false);
        return;
      }
      if (password.length < 6) {
        Alert.alert('Password should be of atleast six length');
        setLoading(false);
        return;
      }
      setLoading(false);
      navigation.navigate('Home',{email});
    } catch (error) {
      Alert.alert(error.response.data.message);
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Login</Text>
      </View>
      <View style={styles.inputBoxArea}>
        <InputBox
          inputTitle={'Email'}
          keyboardType="email-address"
          value={email}
          setValue={setEmail}
        />
        <InputBox
          inputTitle={'Password'}
          secureTextEntry={true}
          value={password}
          setValue={setPassword}
        />
        <SubmitButton
          btnTitle="Login"
          loading={loading}
          handleSubmit={handleSubmit}
        />
        <Text style={styles.loginText}>
          Not a User Please
          <Text
            style={styles.link}
            onPress={()=>{}}>
            {' '}
            Register
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#efeff0',
    height: '100%',
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  title: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBoxArea: {
    flex: 2,
    margin: 20,
  },
  loginText: {
    textAlign: 'center',
    fontSize: 17,
    color: 'black',
  },
  link: {
    color: 'green',
    fontSize: 18,
  },
});
