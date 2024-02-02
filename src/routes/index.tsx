// @refresh reload
import { createSignal } from "solid-js";

import { Box, Container, CssBaseline, Button, FormControl, InputLabel, MenuItem, Select } from "@suid/material";

import WavesurferWrapperComponent from "../components/wavesurfer-wrapper.component";

export default function Index() {
  const [count, setCount] = createSignal(0);
  const [age, setAge] = createSignal("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  return (
    <main>
      <h1>Home Page</h1>
      <button class="increment" onClick={() => setCount(count() + 1)}>
        Clicks: {count()}
      </button>

      <Button variant="contained">Hello world</Button>

      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel>Age</InputLabel>
        <Select
          value={age()}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <WavesurferWrapperComponent></WavesurferWrapperComponent>
    </main>
  );
}
