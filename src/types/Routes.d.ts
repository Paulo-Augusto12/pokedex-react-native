export type RootStackParamList = {
  home: undefined;
  about: {
    pokemonName: string;
  };
};

export type Props = NativeStackScreenProps<RootStackParamList, "about">;

export type HomeProps = Props["navigation"];
export type ProfileScreenRouteProp = Props["route"];
