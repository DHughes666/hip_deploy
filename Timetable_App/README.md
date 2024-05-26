# App Component Documentation

This documentation describes the `App` component, which sets up routing for the `TIMETABLE APPLICATION`

## Table of Contents

1. [Introduction]
2. [Import Statements]
3. [App Component]
   - [BrowserRouter]
   - [Routes]
   - [Route]
4. [Individual Routes]
5. [Protected Routes]
6. [Error Handling]
7. [Export]

## Introduction

The `App` component is the root component of a React application, handling all the routing configurations using `react-router-dom`. It defines various routes and utilizes custom components to manage protected routes based on authentication and user roles.

## Import Statements

The following modules and components are imported at the beginning of the file:

```javascript
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Contact from "./pages/contact";
import Timetable from "./components/viewTimetable";
import ErrorPage from "./pages/error";
import EditTimetable from "./components/editTimetable";
import Header from "./components/header";
import ProtectedRoute from "./components/protectedRoute";
import RoleProtectedRoute from "./components/roleProtectedRoute";
```

- `react-router-dom`: Provides the routing functionality.
- `Home`, `Login`, `Register`, `Contact`, `ErrorPage`: Page components for different routes.
- `Timetable`, `EditTimetable`, `Header`: Components used within the routes.
- `ProtectedRoute`, `RoleProtectedRoute`: Custom components to handle route protection based on authentication and user roles.

## App Component

The `App` component is the root component of the application, containing the routing logic.

```javascript
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact element={<Header />}>
          <Route path="/" element={<Home />} />
          <Route path="/timetable" element={<Timetable />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/editTimetable"
            element={
              <ProtectedRoute>
                <RoleProtectedRoute>
                  <EditTimetable />
                </RoleProtectedRoute>
              </ProtectedRoute>
            }
          />
          <Route path="/*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
```

### BrowserRouter

Wraps the entire application to enable routing.

### Routes

Defines all the routes in the application.

### Route

Each `Route` defines a path and the component that should be rendered when the path is matched. The `exact` prop ensures that the route is matched exactly.

## Individual Routes

- `/`: Renders the `Home` component.
- `/timetable`: Renders the `Timetable` component.
- `/login`: Renders the `Login` component.
- `/register`: Renders the `Register` component.
- `/contact`: Renders the `Contact` component.

## Protected Routes

The application uses `ProtectedRoute` and `RoleProtectedRoute` components to protect certain routes.

### `/editTimetable`

This route is nested with protection layers:

- `ProtectedRoute`: Ensures the user is authenticated.
- `RoleProtectedRoute`: Ensures the user has the appropriate role to access this route.
- If both conditions are met, the `EditTimetable` component is rendered.

## Error Handling

- `/*`: Catches all undefined routes and renders the `ErrorPage` component, providing a user-friendly error message.

## Export

The `App` component is exported as the default export of the module.

```javascript
export default App;
```

This structure ensures that the application has a clear and organized routing setup, with necessary protections for sensitive routes.

---
