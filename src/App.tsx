import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Napoleon from './components/Napoleon';
import Select from './components/Select';
import Settings from './components/Settings';
import WIP from './components/WIP';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="select" element={<Select />} />
                <Route path="settings" element={<Settings />} />
                <Route path="napoleon" element={<Napoleon />} />
                <Route path="wip" element={<WIP />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
