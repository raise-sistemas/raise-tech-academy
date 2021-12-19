import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import TitleForm from './components/TitleForm'
import Average from './components/Average'

export default function RoutesMap(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/form' element={<TitleForm/>}/>
                <Route path='/average' element={<Average/>}/>
            </Routes>
        </BrowserRouter>
    )
}