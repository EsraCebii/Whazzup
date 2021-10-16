import { ChatEngine} from 'react-chat-engine';
import './App.css';
import  ChatFeed  from './components/ChatFeed';

const App = () => {
    return (
        <ChatEngine 
            height="100vh"
            projectID="
            ba81f5b4-04a7-45cb-a31c-6199e4d748ee"
            userName="esracebi"
            userSecret="1234"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps }/>}
        />
    )
}

export default App;