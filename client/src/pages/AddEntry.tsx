import {
  Button,
  NativeSelect,
  TextInput,
  NumberInput,
  Paper,
  Notification,
} from "@mantine/core";
import { isNotEmpty, useForm, hasLength, isInRange } from "@mantine/form";
import { useCallback, useState } from "react";
import { DateInput } from "@mantine/dates";

export function AddEntry() {
  const [successMessage, setSuccessMessage] = useState(false);

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      gender: "Male",
      hoursSlept: "",
      date: "",
    },
    validate: {
      name: hasLength({ min: 1, max: 100 }, "Pleas enter a first name"),
      gender: isNotEmpty("Please pick a gender"),
      hoursSlept: isInRange(
        { min: 0, max: 24 },
        "Please enter the number of hours slept"
      ),
      date: isNotEmpty("Please pick a day"),
    },
  });

  const handleSubmit = useCallback(
    async (values: typeof form.values) => {
      try {
        const res = await fetch("http://localhost:5002/v1/sleepEntries", {
          method: "POST",
          body: JSON.stringify(values),
          headers: { "Content-Type": "application/json" },
        });
        if (res.ok) {
          setSuccessMessage(true);
        }
      } catch (err) {
        console.error(err);
      }
    },
    [form]
  );

  return (
    <Paper shadow="sm" radius="xl" withBorder p="xl">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          {...form.getInputProps("name")}
          key={form.key("name")}
          label="Name"
          placeholder="Alice"
          withAsterisk
        ></TextInput>
        <NativeSelect
          {...form.getInputProps("gender")}
          key={form.key("gender")}
          label="Gender"
          data={["Male", "Female", "Non-binary", "I prefer not to say"]}
          withAsterisk
        />
        <NumberInput
          {...form.getInputProps("hoursSlept")}
          key={form.key("hoursSlept")}
          label="Hours slept"
          clampBehavior="strict"
          allowNegative={false}
          withAsterisk
          placeholder="8"
          min={0}
          max={24}
          description="Between 0 and 24 hours"
          decimalScale={2}
        />
        <DateInput
          {...form.getInputProps("date")}
          key={form.key("date")}
          withAsterisk
          label="Date"
          placeholder="December 25, 2024"
        />

        <Button type="submit" mt="md">
          Submit
        </Button>
        {successMessage && (
          <Notification
            color="green"
            title="Success!"
            mt="md"
            onClose={() => setSuccessMessage(false)}
          >
            Entry successfully saved!
          </Notification>
        )}
      </form>
    </Paper>
  );
}
