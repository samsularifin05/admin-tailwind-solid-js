import { Card, Grid } from "../../components";
import { Col, Row } from "../../components";

const Dashboard = () => {
  return (
    <>
      <Row>
        <Col colSize={2}>
          <Card header="Header Card">Card 1</Card>
        </Col>
        <Col colSize={2}>
          <Card header="Header Card">Card 2</Card>
        </Col>
        <Col colSize={2}>
          <Card header="Header Card">Card 3</Card>
        </Col>
        <Col colSize={2}>
          <Card header="Header Card">Card 4</Card>
        </Col>
      </Row>
      <Grid gridSize={1}>
        <div class="p-4 rounded-lg shadow-lg bg-pink-500">01</div>
        <div class="p-4 rounded-lg shadow-lg bg-pink-500">02</div>
        <div class="p-4 rounded-lg shadow-lg bg-pink-500">03</div>
        <div class="p-4 rounded-lg shadow-lg bg-pink-500">04</div>
      </Grid>
    </>
  );
};

export default Dashboard;
