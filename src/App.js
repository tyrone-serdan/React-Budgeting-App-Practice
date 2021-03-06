import Container from 'react-bootstrap/Container';
import BudgetCard from './components/BudgetCard';
import { Button, Stack } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <Container className='my-4'>
      <Stack direction="horizontal" gap="2" className="mb-4">
        <h1 className="me-auto">Budgets</h1>
        <Button variant='primary'>Add Budget</Button>
        <Button variant='outline-primary'>Add Expense</Button>
      </Stack>

      <div className='grid'>

        <BudgetCard name="Entertainment" amount={500} max={1000} gray />
      </div>
    </Container>
  )
}

export default App;
