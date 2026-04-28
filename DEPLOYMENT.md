# EduLearn Deployment Configuration

This file configures automatic deployment on Render for both frontend and backend services.

## Services Configured

### Frontend (Static Site)
- **Name**: edulearn-frontend
- **Runtime**: Static (Vite)
- **Build**: `npm install && npm run build`
- **Public Path**: `dist/`
- **Routing**: SPA with fallback to index.html

### Backend (Web Service)  
- **Name**: edulearn-backend
- **Runtime**: Java 21
- **Build**: `mvn clean install -DskipTests`
- **Start**: `java -jar target/edulearn-backend-1.0.0.jar`
- **Port**: 8080
- **Health Check**: `/api/health`

## Environment Variables

### Frontend
- `NODE_ENV=production`

### Backend
- `SPRING_PROFILES_ACTIVE=prod`
- `SERVER_PORT=8080`

## Deployment Steps

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Create Render Account** at https://render.com

3. **Create New Services**
   - Click "New" → "Web Service"
   - Connect GitHub repository
   - Render will auto-detect `render.yaml`
   - Services deploy automatically on push

4. **Environment Setup**
   - Backend URL will be provided after deployment
   - Update frontend API endpoint if needed
   - Configure production database (optional)

## Production Considerations

- Deploy backend database (PostgreSQL, MySQL)
- Enable HTTPS/SSL
- Set proper environment variables
- Configure CORS for production domains
- Add authentication layer
- Enable monitoring/logging

## Monitoring

Access logs and metrics in Render dashboard for each service.
