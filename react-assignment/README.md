# React Assignment - Core Concepts, Events & Forms

A comprehensive React application demonstrating core React concepts, event handling, and form management as per the assignment requirements.

## 📚 Assignment Coverage

This project covers all the topics from the React assignment files:

1. **React Core Concepts** - Components, Props, State, JSX
2. **React Events** - onClick, onChange, onSubmit, onMouseEnter, onKeyDown, onFocus, onBlur
3. **React Forms** - Controlled Components, Form Validation, Multiple Input Types

## 🚀 Features

### Core Concepts Section
- **Components**: Reusable Button and Card components
- **Props**: Dynamic data passing to components
- **State**: Interactive components using useState hook
- **JSX**: HTML-like syntax in JavaScript
- **Component Hierarchy**: Header, Main, Footer structure

### Events Section
- **onClick**: Button click events with and without arguments
- **onChange**: Input field change events
- **onSubmit**: Form submission events
- **onMouseEnter**: Hover events
- **onKeyDown**: Keyboard events
- **onFocus/onBlur**: Focus events
- **onDoubleClick**: Double click events

### Forms Section
- **Controlled Components**: All inputs controlled by React state
- **Form Validation**: Real-time validation with error messages
- **Multiple Input Types**:
  - Text input
  - Email input
  - Number input
  - Radio buttons
  - Checkboxes
  - Select dropdown
  - Textarea
- **Form Submission**: Handle form data on submit
- **Form Reset**: Clear form data

## 📁 Project Structure

```
react-assignment/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Button.js          # Props and State demo
│   │   ├── Button.css
│   │   ├── Card.js            # Props demo
│   │   ├── Card.css
│   │   ├── Header.js          # Component hierarchy
│   │   ├── Header.css
│   │   ├── Footer.js          # Component hierarchy
│   │   ├── Footer.css
│   │   ├── EventDemo.js       # Events demonstration
│   │   ├── EventDemo.css
│   │   ├── UserRegistrationForm.js  # Forms demo
│   │   ├── UserRegistrationForm.css
│   │   ├── TextInput.js       # onChange event demo
│   │   └── TextInput.css
│   ├── App.js                 # Main app component
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🛠️ Installation

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
   The app will open at `http://localhost:3000`

## 📖 Components Documentation

### Button Component
- **Purpose**: Demonstrates props and state
- **Props**: `text`, `color`, `onClick`
- **State**: Tracks click count
- **Features**: Interactive button with click counter

### Card Component
- **Purpose**: Demonstrates props and component reusability
- **Props**: `title`, `description`, `imageUrl`, `footer`
- **Features**: Reusable card component with styling

### Header Component
- **Purpose**: Demonstrates component hierarchy
- **Props**: `title`, `subtitle`
- **Features**: App header with gradient background

### Footer Component
- **Purpose**: Demonstrates component hierarchy
- **Features**: App footer

### EventDemo Component
- **Purpose**: Demonstrates React events
- **Events**: onClick, onChange, onMouseEnter, onKeyDown, onFocus, onBlur, onDoubleClick
- **Features**: Interactive event demonstrations

### UserRegistrationForm Component
- **Purpose**: Demonstrates React forms with controlled components
- **Input Types**: Text, Email, Number, Radio, Checkbox, Select, Textarea
- **Features**: Form validation, error handling, form submission

### TextInput Component
- **Purpose**: Demonstrates onChange event
- **Features**: Real-time text display, character count

## 🎯 Key Concepts Demonstrated

### 1. Components
- Functional components
- Component composition
- Component reusability

### 2. Props
- Passing props to components
- Destructuring props
- Default props
- Props are read-only

### 3. State
- useState hook
- State updates
- State in functional components
- Multiple state variables

### 4. Events
- Event handlers
- Passing arguments to event handlers
- Preventing default behavior
- Synthetic events

### 5. Forms
- Controlled components
- Form state management
- Form validation
- Form submission
- Multiple input types

### 6. JSX
- JSX syntax
- Expressions in JSX
- Conditional rendering
- Lists and keys

## 💡 Usage Examples

### Using Button Component
```jsx
<Button text="Login" color="#4caf50" onClick={handleClick} />
```

### Using Card Component
```jsx
<Card
  title="React Components"
  description="Components are reusable pieces of UI"
  footer="Component Example"
/>
```

### Using State
```jsx
const [count, setCount] = useState(0);
```

### Handling Events
```jsx
const handleClick = () => {
  setCount(count + 1);
};

<button onClick={handleClick}>Click Me</button>
```

### Controlled Form Input
```jsx
const [text, setText] = useState('');

<input
  type="text"
  value={text}
  onChange={(e) => setText(e.target.value)}
/>
```

## 🎨 Styling

The project uses:
- CSS modules for component styling
- Responsive design
- Modern UI with gradients and shadows
- Smooth animations and transitions
- Mobile-friendly layout

## 📝 Assignment Requirements Checklist

### React Core Concepts
- ✅ Components (Functional Components)
- ✅ Props (Passing data to components)
- ✅ State (useState hook)
- ✅ JSX (JavaScript XML)
- ✅ Component Hierarchy
- ✅ Component Reusability

### React Events
- ✅ onClick
- ✅ onChange
- ✅ onSubmit
- ✅ onMouseEnter
- ✅ onKeyDown
- ✅ onFocus
- ✅ onBlur
- ✅ onDoubleClick

### React Forms
- ✅ Controlled Components
- ✅ Form State Management
- ✅ Form Validation
- ✅ Multiple Input Types (Text, Email, Number, Radio, Checkbox, Select, Textarea)
- ✅ Form Submission
- ✅ Form Reset

## 🧪 Testing

To run tests:
```bash
npm test
```

## 📦 Build

To create a production build:
```bash
npm run build
```

## 🔧 Technologies Used

- **React** 19.1.1
- **React DOM** 19.1.1
- **React Scripts** 5.0.1
- **CSS3** for styling

## 📚 Learning Resources

This project demonstrates:
- React fundamentals
- Component-based architecture
- Event handling in React
- Form management in React
- State management with hooks
- Props and component communication

## 👨‍💻 Author

Created as part of FSD (Full Stack Development) Projects

## 📄 License

This project is for educational purposes.

## 🎓 Key Takeaways

1. **Components** are the building blocks of React applications
2. **Props** allow data to flow from parent to child components
3. **State** enables interactive and dynamic components
4. **Events** handle user interactions
5. **Controlled Components** provide full control over form inputs
6. **JSX** makes writing React components intuitive

## 🚀 Next Steps

To extend this project, you could:
- Add more form validation rules
- Implement form data persistence
- Add more event types
- Create more complex component hierarchies
- Add routing with React Router
- Implement state management with Context API or Redux
- Add unit tests for components
- Implement error boundaries

---

Happy Learning! 🎉
