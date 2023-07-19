import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button, Group } from "@mantine/core";

export default function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer opened={opened} onClose={close} title="Authentication">
        <div>This is a content!</div>
      </Drawer>

      <Group position="center">
        <Button onClick={open}>Open Drawer</Button>
      </Group>
    </>
  );
}
