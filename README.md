# 🎓 EduLearn - Full Stack Course Management System

A modern, full-stack educational platform built with React, TypeScript, Spring Boot, and Tailwind CSS. Features course management, assignment grading, and student progression tracking.

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18+ and npm
- **Java** 21+
- **Maven** 3.6+

### Installation & Running

**Frontend:**
```bash
cd fsad-review1-main
npm install
npm run dev
```
Frontend runs at: `http://localhost:5173/`

**Backend:**
```bash
cd backend
mvn clean install -DskipTests
mvn spring-boot:run
```
Backend runs at: `http://localhost:8080/api/`

## 📁 Project Structure

```
.
├── fsad-review1-main/          # Frontend (React + TypeScript)
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/     # React components
│   │   │   ├── lib/            # Utilities & mock data
│   │   │   ├── types/          # TypeScript types
│   │   │   └── App.tsx
│   │   ├── styles/             # Global styles
│   │   └── main.tsx
│   ├── package.json
│   ├── vite.config.ts
│   └── tsconfig.json
│
├── backend/                     # Backend (Spring Boot)
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/edulearn/
│   │   │   │   ├── controller/  # REST endpoints
│   │   │   │   ├── entity/      # JPA entities
│   │   │   │   ├── repository/  # Data access
│   │   │   │   └── service/     # Business logic
│   │   │   └── resources/       # Configuration
│   │   └── test/
│   ├── pom.xml
│   └── README.md
│
└── render.yaml                  # Render deployment config
```

## 🌟 Features

### For Students
- Dashboard with course progress tracking
- Interactive course view with lessons
- Assignment submission system
- Grade and feedback viewing

### For Educators
- Course builder & management
- Student enrollment tracking
- Assignment grading interface
- Performance analytics

## 🛠️ Technology Stack

### Frontend
- **React** 18 - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS 4** - Styling
- **Motion** - Animations
- **Radix UI & Shadcn** - Component library
- **React Router 7** - Routing
- **Lucide React** - Icons

### Backend
- **Spring Boot** 3.2 - Framework
- **Java** 21 - Language
- **JPA/Hibernate** - ORM
- **H2 Database** - In-memory DB
- **Maven** - Build tool

## 📚 API Endpoints

### Health
- `GET /api/health` - Service health check
- `GET /api/` - API information

### Courses
- `GET /api/courses` - Get all courses
- `GET /api/courses/{id}` - Get course details
- `POST /api/courses` - Create new course

## 🔧 Configuration

### Frontend Environment
```env
VITE_API_URL=http://localhost:8080/api
```

### Backend Configuration
```properties
server.port=8080
spring.jpa.hibernate.ddl-auto=create-drop
spring.h2.console.enabled=true
```

## 🚢 Deployment

This project includes a `render.yaml` for deployment on [Render](https://render.com):

1. Push repository to GitHub
2. Create new services on Render using this config
3. Connect GitHub repository
4. Auto-deploy on push

## 📝 Database

Uses H2 in-memory database for development. Access the H2 console at:
```
http://localhost:8080/api/h2-console
```

Database credentials:
- JDBC URL: `jdbc:h2:mem:testdb`
- Username: `sa`
- Password: (leave blank)

## 🎨 Design System

- **Color Palette**: Indigo-Violet theme
- **Typography**: Modern sans-serif
- **Animations**: Motion/Framer Motion
- **Responsive**: Mobile-first design

## 🔐 Security Considerations

- CORS enabled for frontend development
- Input validation required
- Add authentication/JWT in production
- Environment variables for sensitive data

## 🧪 Testing

```bash
# Frontend
npm run build    # Production build
npm run preview  # Preview build

# Backend
mvn test         # Run tests
```

## 📖 Documentation

- [Backend README](./backend/README.md) - Detailed backend documentation
- [React Documentation](https://react.dev)
- [Spring Boot Guide](https://spring.io/guides/gs/spring-boot/)

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📄 License

This project is part of the Full Stack Advanced Development (FSAD) curriculum.

## 📞 Support

For issues or questions, please open a GitHub issue or contact the development team.

---

**Last Updated**: April 28, 2026  
**Version**: 1.0.0
