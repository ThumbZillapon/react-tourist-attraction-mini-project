# Tourist Attraction Search Application

A React-based web application for searching and viewing tourist attractions in Thailand. The application features a clean, modern UI with search functionality and displays attraction details including images, descriptions, and categories.

## Features

- **Search Functionality**: Users can search for tourist attractions by keywords
- **Responsive Design**: Works on desktop and mobile devices
- **Attraction Cards**: Each attraction displays:
  - Main image (first photo from the array)
  - Title (clickable link)
  - Description (truncated to 100 characters)
  - "Read More" button (opens in new tab)
  - Categories/tags
  - Three small accompanying images
  - Link icon for sharing

## Project Structure

```
react-tourist-attraction-mini-project/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── SearchPage.jsx    # Main search component
│   │   │   └── SearchPage.css    # Component styles
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
├── server/                 # Express backend
│   ├── app.js             # Server with API endpoints
│   ├── db.js              # Tourist attraction data
│   └── package.json
└── README.md
```

## Installation and Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Backend Setup
1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

The server will run on `http://localhost:4001`

### Frontend Setup
1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173`

## API Endpoints

- `GET /trips?keywords=<search_term>` - Search for attractions by keywords
  - If no keywords provided, returns all attractions
  - Searches in title, description, and tags

## Data Structure

Each attraction object contains:
- `title`: Attraction name
- `eid`: Unique identifier
- `url`: Link to detailed information
- `description`: Full description
- `photos`: Array of image URLs
- `tags`: Array of categories/tags

## Code Quality Principles

The implementation follow .s these software engineering principles:

- **DRY (Don't Repeat Yourself)**: Reusable components and functions
- **High Cohesion**: Related functionality grouped together
- **Loose Coupling**: Minimal dependencies between components
- **Single Responsibility Principle**: Each component has a single purpose

## Technologies Used

- **Frontend**: React, Vite, CSS3
- **Backend**: Node.js, Express
- **HTTP Client**: Axios
- **Data**: Static JSON data with tourist attractions

## Usage

1. Open the application in your browser
2. The page will display all available tourist attractions by default
3. Use the search input to find specific attractions
4. Click on attraction titles or "Read More" buttons to view detailed information
5. All external links open in new tabs for better user experience
