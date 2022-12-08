export const getAllBooks = async () => {
	const response = await fetch("/api/books"); //http://localhost:3080
	return await response.json();
};

export const createBook = async (data) => {
	const response = await fetch("/api/book", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ book: data }),
	});
	return await response.json();
};

export const getAllTodos = async () => {
	const response = await fetch("/api2/todos"); //http://localhost:3070
	return await response.json();
};

export const createTodo = async (data) => {
	const response = await fetch("/api2/todo", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ todo: data }),
	});
	return await response.json();
};
