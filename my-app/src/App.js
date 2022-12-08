import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import BookTable from "./components/BookTable";
import TodoTable from "./components/TodoTable";
import DisplayBoard from "./components/DisplayBoard";
import CreateBook from "./components/CreateBook";
import CreateTodo from "./components/CreateTodo";
import {
	getAllBooks,
	createBook,
	getAllTodos,
	createTodo,
} from "./services/BookService";
import Footer from "./components/Footer";

function App() {
	const [bookShelf, setBookShelf] = useState({});
	const [myTodo, setMyTodo] = useState({});
	const [books, setBooks] = useState([]);
	const [numberOfBooks, setNumberBooks] = useState(0);
	const [todos, setTodos] = useState([]);
	const [numberOfTodos, setNumberTodos] = useState(0);

	const handleSubmit = () => {
		createBook(bookShelf).then(() => {
			setNumberBooks(numberOfBooks + 1);
		});
	};

	const handleTodoSubmit = () => {
		createTodo(myTodo).then(() => {
			setNumberTodos(numberOfTodos + 1);
		});
	};

	const getAllBook = () => {
		getAllBooks().then((data) => {
			setBooks(data);
			setNumberBooks(data.length);
		});
	};

	const getAllTodo = () => {
		getAllTodos().then((data) => {
			setTodos(data);
			setNumberTodos(data.length);
		});
	};

	const handleOnChangeForm = (e) => {
		let inputData = bookShelf;
		if (e.target.name === "book") {
			bookShelf.book = e.target.value;
		} else if (e.target.name === "category") {
			bookShelf.category = e.target.value;
		} else if (e.target.name === "author") {
			bookShelf.author = e.target.value;
		}
		setBookShelf(inputData);
	};

	const handleOnChangeTodoForm = (e) => {
		let inputData = myTodo;
		if (e.target.name === "todo") {
			myTodo.todo = e.target.value;
		} else if (e.target.name === "category") {
			myTodo.category = e.target.value;
		} else if (e.target.name === "isComplete") {
			myTodo.isComplete = e.target.value;
		}
		setMyTodo(inputData);
	};

	return (
		<div className="main-wrapper">
			<div className="main">
				<Header />
				<div className="submit-wrapper">
					<CreateBook
						bookShelf={bookShelf}
						onChangeForm={handleOnChangeForm}
						handleSubmit={handleSubmit}
					/>
					<CreateTodo
						myTodo={myTodo}
						onChangeForm={handleOnChangeTodoForm}
						handleSubmit={handleTodoSubmit}
					/>
				</div>
				<DisplayBoard
					numberOfBooks={numberOfBooks}
					numberOfTodos={numberOfTodos}
					getAllBook={getAllBook}
					getAllTodo={getAllTodo}
				/>
				<BookTable books={books} />
				<TodoTable todos={todos} />
				<Footer />
			</div>
		</div>
	);
}

export default App;
