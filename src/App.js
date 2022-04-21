import { Button, Typography } from "@mui/material";
import { Settings, Add } from "@mui/icons-material";

function App() {
  return (
    <div className="App">
      <Button variant="text">TextJS</Button>
      <Button
        startIcon={<Settings />}
        variant="contained"
        color="secondary"
        size="small"
      >
        Setting
      </Button>
      <Button
        startIcon={<Add />}
        variant="contained"
        color="success"
        size="small"
      >
        Add new Post
      </Button>
      <Button variant="outlined" disabled>
        Outlined
      </Button>
      <Typography variant="h1" component="p">
        h1. Heading
      </Typography>
      <Button variant="contained"  sx={{
        backgroundColor : 'skyblue',
        color : "#888",
        margin : 5,
        "&:hover" : { 
          backgroundColor : "lightblue"
        },
        "&:disabled" : {
          backgroundColor : "gray",
          color:"white"
        }
      }}>My unique Button</Button>

      
    </div>
  );
}

export default App;
