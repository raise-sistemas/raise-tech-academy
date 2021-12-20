import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import PageForm from './components/PageForm'
import PageAverage from './components/PageAverage'

export default function RoutesMap(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/pageform' element={<PageForm/>}/>
                <Route path='/pageaverage' element={<PageAverage/>}/>
            </Routes>
        </BrowserRouter>
    )
}