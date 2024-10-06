// app/page.tsx

"use client"; // Enable client-side rendering

import { AppShell, Container, Title } from '@mantine/core';
import { AudioUploader } from './components/audioUploader';
import { Sidebar } from './components/sidebar';

export default function Home() {
  return (
    <AppShell
      navbar={<Sidebar />} // Integrate the Sidebar component here
      styles={(theme) => ({
        main: {
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
          paddingLeft: 0, // Adjust padding to fit the sidebar
          paddingRight: 0, // Adjust padding if needed
        },
      })}
    >
      <Container>
        <Title align="center" mt="lg">
          Audio Cutter Tool
        </Title>
        {/* Adjust Group if necessary */}
        <AudioUploader />
      </Container>
    </AppShell>
  );
}
