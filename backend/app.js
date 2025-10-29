const express = require('express');
const app = express();
const errorMiddleware = require('./middlewares/error');
const cookieParser = require('cookie-parser');
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors'); // ✅ added this

// Load environment variables
dotenv.config({ path: path.join(__dirname, 'config/config.env') });

// ✅ Enable CORS (this must come BEFORE routes)
app.use(
  cors({
    origin: [
      'http://localhost:3000',
      'https://favcart-frontend.vercel.app',
    ],
    credentials: true,
  })
);

// ✅ Middleware
app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// ✅ Serve frontend static files (images, CSS, JS)
app.use('/images', express.static(path.join(__dirname, '../frontend/public/images')));
app.use(express.static(path.join(__dirname, '../frontend/public')));

// ✅ Import routes
const products = require('./routes/product');
const auth = require('./routes/auth');
const order = require('./routes/order');
const payment = require('./routes/payment');

// ✅ Use routes
app.use('/api/v1', products);
app.use('/api/v1', auth);
app.use('/api/v1', order);
app.use('/api/v1', payment);

// ✅ Serve frontend in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'));
  });
}

// ✅ Error middleware (always last)
app.use(errorMiddleware);

module.exports = app;
