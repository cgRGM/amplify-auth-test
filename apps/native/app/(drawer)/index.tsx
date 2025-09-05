import { View, Text, ScrollView, Button, StyleSheet } from "react-native";
import { Container } from "@/components/container";
import React from "react";
import { Amplify } from "aws-amplify";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react-native";

const SignOutButton = () => {
  const { signOut } = useAuthenticator();

  return (
    <View style={styles.signOutButton}>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
};

export default function Home() {
  return (
    <Container>
      <Authenticator.Provider>
        <Authenticator>
          <SignOutButton />
        </Authenticator>
      </Authenticator.Provider>
    </Container>
  );
}

const styles = StyleSheet.create({
  signOutButton: {
    alignSelf: "flex-end"
  }
});
