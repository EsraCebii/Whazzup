import { ChatEngine} from 'react-chat-engine';
import './App.css';
import  ChatFeed  from './components/ChatFeed';
import LoginForm from "./components/LoginForm";

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />
    return (
        <ChatEngine 
            height="100vh"
            projectID="
            ba81f5b4-04a7-45cb-a31c-6199e4d748ee"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps }/>}
        />
    )
}

export default App;