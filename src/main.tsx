import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import Layout from './layout.tsx'
import Admin from './pages/admin.tsx'
import { ThemeProvider } from './components/theme-provider.tsx'


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
    <Routes>
      {/* rotas que não respeitam o layout */}
      <Route path="/" element={<App />} />

  
      {/* rotas que respeitam */}
      <Route element={<Layout />}>
        <Route path='/admin' element={<Admin/>}/>
      </Route>
    </Routes>
    </ThemeProvider>
  </BrowserRouter>

)
