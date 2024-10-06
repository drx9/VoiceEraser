// components/Sidebar.js

import { Navbar, Stack, Button, Text } from '@mantine/core';
import { useState } from 'react';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Navbar 
      hidden={!collapsed} 
      width={{ base: collapsed ? 50 : 250 }} 
      style={{ backgroundColor: '#1e1e2f', color: 'white' }} 
    >
      <Stack spacing="xs" align={collapsed ? "center" : "flex-start"}>
        <Button 
          variant="subtle" 
          onClick={() => setCollapsed(prev => !prev)} 
          style={{ marginBottom: '1rem', color: 'white' }}
        >
          {collapsed ? <IconChevronRight size={18} /> : <IconChevronLeft size={18} />}
        </Button>
        <Text size="lg" weight={500} style={{ display: collapsed ? 'none' : 'block' }}>Remover</Text>
        
        <Text style={{ display: collapsed ? 'none' : 'block' }}>Splitter</Text>
        <Text style={{ display: collapsed ? 'none' : 'block' }}>Pitcher</Text>
        <Text style={{ display: collapsed ? 'none' : 'block' }}>Key BPM Finder</Text>
        <Text style={{ display: collapsed ? 'none' : 'block' }}>Cutter</Text>
        <Text style={{ display: collapsed ? 'none' : 'block' }}>Joiner</Text>
        <Text style={{ display: collapsed ? 'none' : 'block' }}>Recorder</Text>
        <Text style={{ display: collapsed ? 'none' : 'block' }}>Karaoke</Text>
        <Text style={{ display: collapsed ? 'none' : 'block' }}>Support</Text>
        <Text style={{ display: collapsed ? 'none' : 'block' }}>🇬🇧</Text>
      </Stack>
    </Navbar>
  );
}
