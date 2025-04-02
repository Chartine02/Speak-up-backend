# SpeakUp Backend

This is the backend server for the SpeakUp application built with NestJS.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm (Node Package Manager)
- Git

## Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/speak-up-backend.git
cd speak-up-backend
```

2. Install dependencies
```bash
npm install
```

## Environment Variables

Create a `.env` file in the root directory and add the following variables:
```env
PORT=3000
DATABASE_URL=your_database_connection_string
JWT_SECRET=your_jwt_secret
```

## Running the Application

### Development Mode
```bash
# Run in development mode with hot-reload
npm run start:dev
```

### Production Mode
```bash
# Build the application
npm run build

# Run in production mode
npm run start:prod
```

## API Documentation

Once the application is running, you can access the Swagger API documentation at:
- Local: http://localhost:3000/api
- Production: https://speak-up-backend.onrender.com/api

## Available Endpoints

The API includes the following main endpoints:
- `POST /auth/signin` - User authentication
- `POST /auth/signup` - User registration

## CORS Configuration

The application is configured to accept requests from:
- http://localhost:5173 (Development frontend)
- https://speak-up-daily.netlify.app (Production frontend)
- https://speak-up-backend.onrender.com (Backend URL)


## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
