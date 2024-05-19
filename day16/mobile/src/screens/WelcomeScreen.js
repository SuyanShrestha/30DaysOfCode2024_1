import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Animated, {useSharedValue, withSpring} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {

  const navigation = useNavigation();

  // for animated rings
  const ring1padding = useSharedValue(0);
  const ring2padding = useSharedValue(0);

  useEffect(() => {
    // ek arka maa stack nahos vanerw reassigned to 0
    ring1padding.value = 0;
    ring2padding.value = 0;
    setTimeout(() => ring1padding.value = withSpring(ring1padding.value + hp(5)), 100);
    setTimeout(() => ring2padding.value = withSpring(ring2padding.value + hp(5.5)), 300);

    setTimeout(() => navigation.navigate('Home'), 1500);
  }, [])


  return (
    <View className="flex-1 justify-center items-center space-y-10 bg-amber-500">
      <StatusBar style="light" />

      {/* logo image and bahira ko rings ko lagi chahi yo duita external view rakheko*/}
      <Animated.View className="bg-white/20 rounded-full" style={{padding: ring2padding}}>
        <Animated.View className="bg-white/20 rounded-full" style={{padding: ring1padding}}>
          <Image
            source={require("../../assets/images/welcome.png")}
            style={{ width: hp(20), height: hp(20), borderRadius: 100}}         
          />
        </Animated.View>
      </Animated.View>

      {/* title and one liner */}
      <View className= "flex items-center space-y-2">
        <Text style={{fontSize: hp(6)}} className="font-bold text-white tracking-widest ">
            SwaadSansaar
        </Text>
        <Text style={{fontSize: hp(2)}} className="font-medium text-white tracking-widest ">
            भान्सा dekhi, भान्सा samma.
        </Text>
      </View>
    </View>
  );
};

export default WelcomeScreen;
