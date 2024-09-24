import { Tabs } from "@mantine/core";
import { useNavigate } from "react-router-dom";

export function NavigationBar() {
  const navigate = useNavigate();

  return (
    <Tabs defaultValue="gallery" onChange={(value) => navigate(`/${value}`)}>
      <Tabs.List>
        <Tabs.Tab value="addEntry">Add new entry</Tabs.Tab>
        <Tabs.Tab value="viewEntries">View entries overview</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
