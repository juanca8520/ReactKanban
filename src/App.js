import React from 'react';
import './App.css';
import { Container, Row, Col, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

class Board extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <TaskBoard nombre="To do" />
          </Col>
          <Col>
            <TaskBoard nombre="Doing" />
          </Col>
          <Col>
            <TaskBoard nombre="Done" />
          </Col>
        </Row>
      </Container>
    );
  }
}

class TaskBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: props.nombre,
      tasks: []
    }
  }

  handleClick() {
    let tasks = this.state.tasks;
    tasks.push({ nombre: "Estudiar", descripcion: "Todas las materias" })
    this.setState({
      nombre: this.state.nombre,
      tasks: tasks
    })
  }

  removeTask(index) {
    let tasks = this.state.tasks;
    tasks.splice(index,1);
    this.setState({
      nombre: this.state.nombre,
      tasks: tasks
    })
  }

  renderTask(index) {
    return <div className='task'>
      <Task
        nombre={this.state.tasks[index].nombre}
        descripcion={this.state.tasks[index].descripcion}
        onClick={() => this.removeTask(index)} />
    </div>
  }

  render() {
    return (
      <div className='taskBoard'>
        <div>
          <h5 className="taskBoardTitle">{this.state.nombre}</h5>
        </div>
        {this.state.tasks.map((value, index) => (
          this.renderTask(index)
        ))}
        <Button onClick={() => this.handleClick()} variant="primary">Add task</Button>
      </div>
    );
  }
}

function Task(props) {
  return (
    <div>
      <h6>
        {props.nombre}
      </h6>
      <h8>
        {props.descripcion}
      </h8>

      <div className='taskB'>
        <Button onClick={props.onClick} variant="primary">-</Button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="title">
      <h1>
        My Kanban App
      </h1>
      <Board />
    </div>
  );
}

export default App;
