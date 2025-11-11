# Quick Start Guide

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation Steps

1. **Navigate to the project directory:**
   ```bash
   cd react-assignment
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open your browser:**
   - The app will automatically open at `http://localhost:3000`
   - If it doesn't, manually navigate to the URL

## 📱 Using the Application

### Navigation
The app has three main sections accessible via the navigation buttons:

1. **Core Concepts** - Demonstrates components, props, and state
2. **Events** - Shows various React events in action
3. **Forms** - Demonstrates form handling with controlled components

### Core Concepts Section
- Click the buttons to see state management in action
- Each button maintains its own click counter
- Cards demonstrate props and component reusability
- Text input shows onChange event in action

### Events Section
- **Click Events**: Click buttons to see onClick events
- **Change Events**: Type in the input field to see onChange
- **Hover Events**: Hover over the yellow box
- **Keyboard Events**: Press keys while typing
- **Focus Events**: Click in and out of input fields
- **Double Click**: Double click the green box

### Forms Section
- Fill out the registration form
- See real-time validation
- Submit the form to see the data displayed
- Use the Reset button to clear the form

## 🧪 Testing Components

### Button Component
```jsx
<Button text="Click Me" color="#4caf50" onClick={handleClick} />
```

### Card Component
```jsx
<Card
  title="Title"
  description="Description"
  footer="Footer"
/>
```

### Form Input
```jsx
<input
  type="text"
  value={text}
  onChange={(e) => setText(e.target.value)}
/>
```

## 📝 Key Features Demonstrated

### 1. Components
- Functional components
- Component composition
- Reusable components

### 2. Props
- Passing data to components
- Destructuring props
- Default values

### 3. State
- useState hook
- State updates
- Multiple state variables

### 4. Events
- Event handlers
- Passing arguments
- Preventing default behavior

### 5. Forms
- Controlled components
- Form validation
- Multiple input types

## 🐛 Troubleshooting

### Port Already in Use
If port 3000 is already in use:
```bash
# Kill the process using port 3000
# Linux/Mac
lsof -ti:3000 | xargs kill

# Or use a different port
PORT=3001 npm start
```

### Module Not Found Errors
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
# Clear cache and rebuild
npm start -- --reset-cache
```

## 📚 Learning Path

1. **Start with Core Concepts**
   - Understand components and props
   - Learn about state management
   - Practice with reusable components

2. **Move to Events**
   - Learn event handling
   - Practice with different event types
   - Understand event propagation

3. **Master Forms**
   - Learn controlled components
   - Practice form validation
   - Handle form submission

## 🎯 Assignment Checklist

- ✅ Components created
- ✅ Props implemented
- ✅ State management
- ✅ Events handled
- ✅ Forms with validation
- ✅ Component hierarchy
- ✅ Styling applied
- ✅ Documentation complete

## 💡 Tips

1. **Read the Code**: Each component has comments explaining what it does
2. **Experiment**: Try modifying the code to see what happens
3. **Console**: Check the browser console for any errors or logs
4. **React DevTools**: Install React DevTools browser extension for debugging

## 🎓 Next Steps

After completing this assignment, you can:
- Add more components
- Implement routing
- Add state management (Context API/Redux)
- Add API integration
- Implement authentication
- Add unit tests
- Deploy the application

---

Happy Coding! 🚀

