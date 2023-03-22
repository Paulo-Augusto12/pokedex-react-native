import React from "react";

import { ActivityIndicator, View } from "react-native";

interface ILoadingComponent {
  loading: boolean;
}
export function LoadingComponent({ loading }: ILoadingComponent) {
  if (!loading) return null;
  return (
    <View style={{padding: 20}}>
      <ActivityIndicator size={35} color="#BAC0D4" />
    </View>
  );
}
