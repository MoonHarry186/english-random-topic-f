import RandomTopic from './components/RandomTopic';
import AddTopic from './components/AddTopic';
import Container from './container/Container';
import {Route, Routes} from 'react-router-dom'
import TopicsList from './components/TopicsList';

function App() {




  return (
    <Container>
      <Routes>
        <Route path='/' element={<RandomTopic />} />
        <Route path='/topic' element={<RandomTopic />} />
        <Route path='/add-topic' element={<AddTopic />} />
        <Route path='/topics-list' element={<TopicsList />} />
      </Routes>
    </Container>
  );
}

export default App;
