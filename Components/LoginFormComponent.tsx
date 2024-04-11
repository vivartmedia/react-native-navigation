import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { createAccount, login } from '../DatraServices/Dataservices'
import { IToken } from '../Interfaces/Interfaces'
import { Props } from '../type'

const LoginFormComponent = () => {
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [edit, setEdit] = useState<boolean>(true);

    const navigate = useNavigation<Props>()

    const handleSubmit = async () => {
        const userData = {
            username: username,
            password: password
        }

        if(edit){
          let token: IToken = await login(userData);
          console.log(token)
          if(token){
            navigate.navigate("ProfileScreen")
          }
        }else{
          createAccount(userData)
        }

            // navigate.navigate("ProfileScreen")

    }
    const handleChange = () => {
      setEdit(!edit);
    }

  return (
    <View style={styles.Container}>
      <Text style={{ paddingBottom: 25, fontSize: 35}}>{edit ? `Login page` : `Registration page`}</Text>
      <TextInput
      style={styles.Input}
        placeholder='Username'
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
      style={styles.Input}
        placeholder='Password'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '75%'}}>
        <Text onPress={handleChange} style={{color: 'blue', textDecorationLine: 'underline'}} >{edit ? `Register` : `Login` }</Text>
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </View>
  )
}

export default LoginFormComponent

const styles = StyleSheet.create({
    Container: {
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    Input: {
        width: 250,
        height: 40,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        backgroundColor: "white",
        marginBottom: 10,
        paddingHorizontal: 10

    }
})