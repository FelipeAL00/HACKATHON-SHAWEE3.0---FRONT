import { Platform } from "react-native";
import styled from "styled-components/native";
import Button from "../../components/Button";
import Input from "../../components/Input";

export const ImageS = styled.Image`
  height: 100px;
  width: 100px;
`;

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === "ios",
  behavior: "padding",
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;
export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;
export const FormatButton = styled(Button)`
  margin-bottom: 10px;
`;
export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;
export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
  text-align: center;
`;
export const SignLinkText = styled.Text`
  color: #333;
  font-weight: bold;
  font-size: 16px;
`;
