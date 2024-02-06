const express = require('express');
const cors = require('cors');

const attendenceRouter = require('./Routes/attendence');
const billingRouter = require('./Routes/billingRoute');
const customerRouter = require('./Routes/customerRoute');
const itemRouter = require('./Routes/itemRoute');
const staffRouter = require('./Routes/staffRoute');
const supplierRouter = require('./Routes/supplierRoute');
const userRouter = require('./Routes/userRoute');


const app = express();
app.use(express.json());
app.use(cors())


app.use('/api', attendenceRouter);
app.use('/api', billingRouter);
app.use('/api', customerRouter);
app.use('/api', itemRouter);
app.use('/api',staffRouter)
app.use('/api', supplierRouter);
app.use('/api',userRouter);

module.exports = app;