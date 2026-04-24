import React, { useEffect, useState } from 'react';
import { Container, Typography, Button, Card, CardContent } from '@mui/material';

function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    fetch('http://localhost:5000/api/message')
      .then(res => res.json())
      .then(data => setMessage(data.text));
  }, []);

  return (
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <Card raised>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {message}
          </Typography>
          <Button variant="contained" color="primary">
            MUI Button
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}

export default App;