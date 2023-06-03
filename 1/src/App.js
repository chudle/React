import { UserList } from './list/UserList';
import './App.css';

function App() {
    const styles = {
        padding: 15,
        backgroundColor: '#000000',
        color: '#FFFFFF'
    }
    return (
        <div>
        <h2 style={styles}>INFORMATION ABOUT USERS</h2>
        <UserList />
        </div>
    );
}

export default App;
