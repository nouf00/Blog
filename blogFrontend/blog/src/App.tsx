import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Register } from "./page/Registr"
 import { LoginPage } from "./page/log"
 



export const App = () => (
  <BrowserRouter>
  <ChakraProvider theme={theme}>
    <Routes>
    <Route path="/login" element={< LoginPage/>}><Route/>
    <Route path="/register" element={< Register/>}><Route/>
    </Routes>
  </ChakraProvider>
</BrowserRouter>
)
