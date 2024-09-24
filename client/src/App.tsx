import { Container, Center, Space } from "@mantine/core";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { AddEntry } from "./pages/AddEntry";
import { EntriesOverview } from "./pages/EntriesOverview";
import { NavigationBar } from "./Components/NavigationBar";

export function App() {
  return (
    <BrowserRouter>
      <Container size={"40rem"}>
        <Center>
          <h1>Sleep Tracker</h1>
        </Center>
        <NavigationBar />
        <Space h="md" />
        <Routes>
          <Route path={"/"} element={<Navigate to="/addEntry" />} />
          <Route path={"/addEntry"} element={<AddEntry />} />
          <Route path={"/viewEntries"} element={<EntriesOverview />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}
