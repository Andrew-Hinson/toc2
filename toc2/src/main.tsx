import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Section1, Section2, Section3} from './Sections.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Section1 />
    <Section2 />
    <Section3 />
  </StrictMode>,
)
