import { Ionicons } from "@expo/vector-icons";

import { ImageBackground } from "expo-image";
import { Link } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("@/assets/myImages/backgroundImage.jpg")}
        style={styles.background}
      >
        <View>
          <View style={styles.top}>
            <Image
              source={require("@/assets/myImages/alxLogo.png")}
              width={100}
              height={100}
            />
            <Text style={styles.largeText}>Find your favorite place here</Text>
            <View>
              <Text style={styles.smallText}>The best prices for over 2 </Text>
              <Text style={styles.smallText}>million properties worldwide</Text>
            </View>
          </View>
        </View>
        <View style={styles.bottom}>
          <View style={styles.buttonGroup}>
            {/* <TouchableOpacity style={styles.joinButton}> */}
            <Link href={"/join"} style={styles.joinButton}>
              <Text style={{ fontSize: 15 }}>Join</Text>
            </Link>
            {/* </TouchableOpacity> */}
            {/* <TouchableOpacity style={styles.signUpButton}> */}
            <Link href={"/signin"} style={styles.signUpButton}>
              <Text style={{ fontSize: 15, color: "white" }}>Sign in</Text>
            </Link>
            {/* </TouchableOpacity> */}
          </View>
          {/* <TouchableOpacity> */}
            <Link href={"/(tabs)/home"}>
              <Text
                style={{
                  ...styles.smallText,
                  textAlign: "center",
                  fontWeight: 400,
                  fontSize: 18,
                }}
              >
                Continue to home <Ionicons name="arrow-forward" size={15} />
              </Text>
            </Link>
          {/* </TouchableOpacity> */}
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    paddingVertical: 50,
    justifyContent: "space-between",
  },
  top: {
    display: "flex",
    gap: 20,
    alignItems: "center",
  },
  largeText: {
    color: "white",
    fontWeight: 500,
    fontSize: 30,
    maxWidth: 200,
    textAlign: "center",
  },
  smallText: {
    color: "white",
    fontWeight: 200,
    fontSize: 20,
  },
  bottom: {
    gap: 20,
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  joinButton: {
    paddingHorizontal: 35,
    paddingVertical: 10,
    backgroundColor: "white",
    borderRadius: 20,
  },
  signUpButton: {
    paddingHorizontal: 35,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 20,
  },
});
