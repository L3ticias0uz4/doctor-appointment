import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';

const AppView = styled.SafeAreaView``
const Status = styled.StatusBar``
const Title = styled.Text`
  font-size: 100px;
  color: blue;
`

export default function App() {
  return (
    <AppView>
      <Status /> 
      <Title>App com Styled</Title>
    </AppView>
  );
}

