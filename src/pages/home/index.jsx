import { Container} from "./styles"
import { Greetings } from "./styles"
import { GreetingsTitle } from "./styles"
import { GreetingsSpan } from "./styles"
import { GreetingsText } from "./styles"
import { GreeatingsAvatar } from "./styles"

export const Home = () => {
  return (
    <Container>
        <Greetings>
            <GreetingsTitle>
                <GreetingsSpan>Hello,</GreetingsSpan>
                <GreetingsText>Hi James</GreetingsText>
            </GreetingsTitle>
            <GreeatingsAvatar source={require("../../assets/greetings-avatar.png")} />
        </Greetings>
        <ScheduleCard></ScheduleCard>
    </Container>

   
  )
}