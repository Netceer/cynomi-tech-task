import { Table, Text } from "@mantine/core";
import { useCallback, useState, useEffect, useMemo } from "react";

interface SleepEntry {
  name: string;
  gender: string;
  count: number;
}

export function EntriesOverview() {
  const [entriesData, setEntriesData] = useState<SleepEntry[]>([]);

  const fetchData = useCallback(async () => {
    try {
      const res = await fetch("http://localhost:5002/v1/sleepEntries", {
        method: "GET",
      });
      if (res.ok) {
        const data = await res.json();
        setEntriesData(data);
      }
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const tableRows = useMemo(() => {
    return entriesData.map((entry) => (
      <Table.Tr key={`${entry.name}-${entry.gender}`}>
        <Table.Td>{entry.name}</Table.Td>
        <Table.Td>{entry.gender}</Table.Td>
        <Table.Td>{entry.count}</Table.Td>
      </Table.Tr>
    ));
  }, [entriesData]);

  return (
    <>
      {entriesData.length > 0 ? (
        <Table striped highlightOnHover withTableBorder withColumnBorders>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Name</Table.Th>
              <Table.Th>Gender</Table.Th>
              <Table.Th>Number of sleep entries</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{tableRows}</Table.Tbody>
        </Table>
      ) : (
        <Text>No data found, please add a new entry </Text>
      )}
    </>
  );
}
